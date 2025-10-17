import { playersData, linkDetails } from "./dataRegistry";
import { slugify } from "./buffTranslations";

export type LinkParticipant = {
  id: string;
  name: string;
  avatar?: string;
};

const pageIdRegex = /[?&]p=(\d+)/;

const participantsByKey = new Map<string, LinkParticipant[]>();
const participantsBySlug = new Map<string, LinkParticipant[]>();
const participantsByPageId = new Map<number, LinkParticipant>();

function addToMap(map: Map<string, LinkParticipant[]>, key: string, participant: LinkParticipant) {
  if (!key) return;
  if (map.has(key)) {
    map.get(key)!.push(participant);
  } else {
    map.set(key, [participant]);
  }
}

for (const player of playersData) {
  const participant: LinkParticipant = {
    id: player.id,
    name: player.name,
    avatar: player.avatar,
  };

  const source = player.metadata?.source;
  if (source) {
    const match = source.match(pageIdRegex);
    if (match) {
      const pageId = Number(match[1]);
      if (!Number.isNaN(pageId) && !participantsByPageId.has(pageId)) {
        participantsByPageId.set(pageId, participant);
      }
    }
  }

  for (const link of player.links || []) {
    const key = link?.key;
    if (!key) continue;
    addToMap(participantsByKey, key, participant);
    addToMap(participantsBySlug, slugify(key), participant);
  }
}

function collectFromDetail(
  identifier: string,
  result: Map<string, LinkParticipant>,
) {
  const detail =
    linkDetails[identifier] || linkDetails[slugify(identifier)] || undefined;
  if (!detail?.members) return;

  for (const member of detail.members) {
    if (!member) continue;
    if (member.page_id != null) {
      const participant = participantsByPageId.get(member.page_id);
      if (participant) {
        if (!result.has(participant.id)) result.set(participant.id, participant);
        continue;
      }
    }
    if (member.url) {
      const match = member.url.match(pageIdRegex);
      if (match) {
        const pageId = Number(match[1]);
        if (!Number.isNaN(pageId)) {
          const participant = participantsByPageId.get(pageId);
          if (participant) {
            if (!result.has(participant.id))
              result.set(participant.id, participant);
            continue;
          }
        }
      }
      const raw = member.url.split("/").pop() || member.url;
      const decoded = decodeURIComponent(raw).replace(/[-_]/g, " ");
      const fallbackId = `${identifier}-${slugify(decoded)}`;
      if (!result.has(fallbackId)) {
        result.set(fallbackId, {
          id: fallbackId,
          name: decoded,
        });
      }
    }
  }
}

export function getLinkParticipants(
  identifier: string | null | undefined,
): LinkParticipant[] {
  if (!identifier) return [];
  const result = new Map<string, LinkParticipant>();

  const tryAddList = (list?: LinkParticipant[]) => {
    if (!list) return;
    for (const participant of list) {
      if (!result.has(participant.id)) {
        result.set(participant.id, participant);
      }
    }
  };

  const identifiers = new Set<string>();
  identifiers.add(identifier);
  identifiers.add(slugify(identifier));

  for (const id of identifiers) {
    tryAddList(participantsByKey.get(id));
    tryAddList(participantsBySlug.get(id));
    collectFromDetail(id, result);
  }

  return Array.from(result.values()).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
}

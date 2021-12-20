import {
  ApplicationCommand, Awaitable, Client, Collection, DMChannel,
  Guild, GuildBan, GuildChannel, GuildEmoji, GuildMember,
  Interaction, InvalidRequestWarningData, Invite, Message,
  MessageReaction, NewsChannel, PartialGuildMember, PartialMessage,
  PartialMessageReaction, PartialUser, Presence, RateLimitData,
  Role, Snowflake, StageInstance, Sticker, TextBasedChannels,
  TextChannel, ThreadChannel, ThreadMember, Typing, User, VoiceState
} from 'discord.js'

// TODO: 型パズルすればずっと簡潔に書けるはず
// @see ClientEvents
export interface EventList {
  applicationCommandCreate: (command: ApplicationCommand) => Awaitable<void>;
  applicationCommandDelete: (command: ApplicationCommand) => Awaitable<void>;
  applicationCommandUpdate: (oldCommand: ApplicationCommand | null, newCommand: ApplicationCommand) => Awaitable<void>;
  channelCreate: (channel: GuildChannel) => Awaitable<void>;
  channelDelete: (channel: DMChannel | GuildChannel) => Awaitable<void>;
  channelPinsUpdate: (channel: TextBasedChannels, date: Date) => Awaitable<void>;
  channelUpdate: (oldChannel: DMChannel | GuildChannel, newChannel: DMChannel | GuildChannel) => Awaitable<void>;
  debug: (message: string) => Awaitable<void>;
  warn: (message: string) => Awaitable<void>;
  emojiCreate: (emoji: GuildEmoji) => Awaitable<void>;
  emojiDelete: (emoji: GuildEmoji) => Awaitable<void>;
  emojiUpdate: (oldEmoji: GuildEmoji, newEmoji: GuildEmoji) => Awaitable<void>;
  error: (error: Error) => Awaitable<void>;
  guildBanAdd: (ban: GuildBan) => Awaitable<void>;
  guildBanRemove: (ban: GuildBan) => Awaitable<void>;
  guildCreate: (guild: Guild) => Awaitable<void>;
  guildDelete: (guild: Guild) => Awaitable<void>;
  guildUnavailable: (guild: Guild) => Awaitable<void>;
  guildIntegrationsUpdate: (guild: Guild) => Awaitable<void>;
  guildMemberAdd: (member: GuildMember) => Awaitable<void>;
  guildMemberAvailable: (member: GuildMember | PartialGuildMember) => Awaitable<void>;
  guildMemberRemove: (member: GuildMember | PartialGuildMember) => Awaitable<void>;
  guildMembersChunk: (
    members: Collection<Snowflake, GuildMember>,
    guild: Guild,
    data: { count: number; index: number; nonce: string | undefined },
  ) => Awaitable<void>;
  guildMemberUpdate: (oldMember: GuildMember | PartialGuildMember, newMember: GuildMember) => Awaitable<void>;
  guildUpdate: (oldGuild: Guild, newGuild: Guild) => Awaitable<void>;
  inviteCreate: (invite: Invite) => Awaitable<void>;
  inviteDelete: (invite: Invite) => Awaitable<void>;
  /** @deprecated Use messageCreate instead */
  message: (message: Message) => Awaitable<void>;
  messageCreate: (message: Message) => Awaitable<void>;
  messageDelete: (message: Message | PartialMessage) => Awaitable<void>;
  messageReactionRemoveAll: (
    message: Message | PartialMessage,
    reactions: Collection<string | Snowflake, MessageReaction>,
  ) => Awaitable<void>;
  messageReactionRemoveEmoji: (reaction: MessageReaction | PartialMessageReaction) => Awaitable<void>;
  messageDeleteBulk: (messages: Collection<Snowflake, Message | PartialMessage>) => Awaitable<void>;
  messageReactionAdd: (reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) => Awaitable<void>;
  messageReactionRemove: (reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) => Awaitable<void>;
  messageUpdate: (oldMessage: Message | PartialMessage, newMessage: Message | PartialMessage) => Awaitable<void>;
  presenceUpdate: (oldPresence: Presence | null, newPresence: Presence) => Awaitable<void>;
  rateLimit: (rateLimitData: RateLimitData) => Awaitable<void>;
  invalidRequestWarning: (invalidRequestWarningData: InvalidRequestWarningData) => Awaitable<void>;
  ready: (client: Client<true>) => Awaitable<void>;
  invalidated: () => Awaitable<void>;
  roleCreate: (role: Role) => Awaitable<void>;
  roleDelete: (role: Role) => Awaitable<void>;
  roleUpdate: (oldRole: Role, newRole: Role) => Awaitable<void>;
  threadCreate: (thread: ThreadChannel) => Awaitable<void>;
  threadDelete: (thread: ThreadChannel) => Awaitable<void>;
  threadListSync: (threads: Collection<Snowflake, ThreadChannel>) => Awaitable<void>;
  threadMemberUpdate: (oldMember: ThreadMember, newMember: ThreadMember) => Awaitable<void>;
  threadMembersUpdate: (
    oldMembers: Collection<Snowflake, ThreadMember>,
    newMembers: Collection<Snowflake, ThreadMember>,
  ) => Awaitable<void>;
  threadUpdate: (oldThread: ThreadChannel, newThread: ThreadChannel) => Awaitable<void>;
  typingStart: (typing: Typing) => Awaitable<void>;
  userUpdate: (oldUser: User | PartialUser, newUser: User) => Awaitable<void>;
  voiceStateUpdate: (oldState: VoiceState, newState: VoiceState) => Awaitable<void>;
  webhookUpdate: (channel: TextChannel | NewsChannel) => Awaitable<void>;
  /** @deprecated Use interactionCreate instead */
  interaction: (interaction: Interaction) => Awaitable<void>;
  interactionCreate: (interaction: Interaction) => Awaitable<void>;
  shardDisconnect: (closeEvent: CloseEvent, shardId: number) => Awaitable<void>;
  shardError: (error: Error, shardId: number) => Awaitable<void>;
  shardReady: (shardId: number, unavailableGuilds: Set<Snowflake> | undefined) => Awaitable<void>;
  shardReconnecting: (shardId: number) => Awaitable<void>;
  shardResume: (shardId: number, replayedEvents: number) => Awaitable<void>;
  stageInstanceCreate: (stageInstance: StageInstance) => Awaitable<void>;
  stageInstanceUpdate: (oldStageInstance: StageInstance | null, newStageInstance: StageInstance) => Awaitable<void>;
  stageInstanceDelete: (stageInstance: StageInstance) => Awaitable<void>;
  stickerCreate: (sticker: Sticker) => Awaitable<void>;
  stickerDelete: (sticker: Sticker) => Awaitable<void>;
  stickerUpdate: (oldSticker: Sticker, newSticker: Sticker) => Awaitable<void>;
}

export type EventPartialList = Partial<EventList>

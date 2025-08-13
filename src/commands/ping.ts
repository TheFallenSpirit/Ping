import { CommandContext, Declare, Command, Container } from 'seyfert';
import { ComponentType, MessageFlags } from 'seyfert/lib/types/index.js';

@Declare({
    name: 'ping',
    description: 'View my ping.'
})

export default class extends Command {
    run = async (context: CommandContext) => {
        const timestamp = context.interaction?.createdTimestamp ?? context.message?.createdTimestamp ?? Date.now();
        const appPing = Date.now() - timestamp;
        const shardPing = ((appPing + context.client.latency) / 2).toFixed();

        const lines = [
            `### 🏓 Ping • ${context.client.me.username}\n`,
            `⚡ Shard ${context.shardId} (${shardPing}ms)\n💓 WS: ${context.client.latency}ms - ⏳ App: ${appPing}ms`
        ];

        const container = new Container({
            accent_color: 0xfaff6d,
            components: [{ type: ComponentType.TextDisplay, content: lines.join('') }]
        });

        await context.editOrReply({ components: [container], flags: MessageFlags.IsComponentsV2 });
    };
};

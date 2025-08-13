import { config } from 'seyfert';
 
export default config.bot({
    token: process.env.DISCORD_TOKEN ?? '',
    locations: {
        base: 'build',
        events: 'events',
        commands: 'commands'
    },
    intents: [
        'Guilds',
        'GuildMessages',
        'MessageContent'
    ]
});

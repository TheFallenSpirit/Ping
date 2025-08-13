import { Client, ParseClient } from 'seyfert';

declare module 'seyfert' {
    interface UsingClient extends ParseClient<Client<true>> {}

    interface InternalOptions {
        withPrefix: true;
    }
}

const client = new Client({
    commands: { prefix: () => ['!!'], reply: () => true }
});

client.start();

import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "returns a websocket ping",
    run: async ({ interaction }) => {
        interaction.followUp("pong!")
    }
})
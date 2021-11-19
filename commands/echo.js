const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Echoes the text you input!')
        .addStringOption(option =>
            option.setName('input')
            .setDescription('Enter the text to be echoed')
            .setRequired(true)

        ),
        

	async execute(interaction) {
		await interaction.reply(interaction.options.get("input").value);
	},
};

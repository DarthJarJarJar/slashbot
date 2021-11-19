const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jumbo')
		.setDescription('Replies with an enlarged emoji!')
        .addStringOption(option => 
            option.setName('emoji')
            .setDescription("Emoji you want to jumbo")
            .setRequired(true)
            ),
	async execute(interaction) {
		await interaction.reply(interaction.options.get('emoji').value.url);
	},
};

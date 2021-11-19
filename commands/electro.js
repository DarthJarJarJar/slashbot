const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('electro')
		.setDescription('Replies with Electro!'),
	async execute(interaction) {
		await interaction.reply('https://tenor.com/view/amazing-spiderman2vomit-electro-amazing-spiderman2-spiderman-vomit-sex-gif-13866212');
	},
};
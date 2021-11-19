const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flameon')
		.setDescription('Flame on and on and on and on!'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/826766972204744767/888296963517333564/flameon.gif');
	},
};

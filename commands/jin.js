const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jin')
		.setDescription('Replies with Jin!')
		.addIntegerOption(option =>
			option.setName('number')
			.setDescription('Number of jins you want to send')
			.setRequired(true)

		),
        
	async execute(interaction) {
		const numberOfJins = interaction.options.get('number').value;
		let jinString = "<:jinhappy:906304050272817202>\n"
		for(i=1;i>numberOfJins;i++){
			
			jinString+="<:jinhappy:906304050272817202>\n"
			await interaction.reply(jinString)
		}
	},
};


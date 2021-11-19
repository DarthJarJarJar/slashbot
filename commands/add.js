const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('Adds two numbers!')
        .addNumberOption(option =>
            option.setName('input1')
            .setDescription('Enter the first number to be added')
            .setRequired(true)

        )
        .addNumberOption(option =>
            option.setName('input2')
            .setDescription('Enter second number to be added!')
            .setRequired(true)


        ),
        

	async execute(interaction) {
		await interaction.reply(`The sum is ${interaction.options.get("input1").value+interaction.options.get("input2").value}`);
	},
};
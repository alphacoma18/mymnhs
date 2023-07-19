const sectionList = {
	"11": {
		STEM: ["Pythagoras", "Euclid", "Archimedes"],
		ICT: ["Torvalds", "Jobs", "Gates", "Dell"],
		HUMMS: ["Socrates", "Plato", "Aristotle"],
		HE: ["Laurentiis", "Laudico"],
		GAS: ["Rizal", "Bonfacio", "Plaridel", "Aguinaldo"],
		ABM: ["Hamilton", "Pacioli", "Porter", "Smith"],
	},
	"12": {
		STEM: ["Newton", "Kepler", "Einstein"],
		ICT: ["Pascal", "Hollerith", "Babbage"],
		HUMMS: ["Confucious", "Siddhartha"],
		HE: ["Escoffier"],
		GAS: ["Mabini", "Balagtas"],
		ABM: ["Morgan", "Ford"],
	},
};

function sectionGetter(
	grade: keyof typeof sectionList,
	strand: keyof (typeof sectionList)[typeof grade],
): string[] {
	return sectionList[grade][strand];
}

export default sectionGetter;

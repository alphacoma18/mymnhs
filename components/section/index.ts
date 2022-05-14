interface GradeList {
	"11": {
		STEM: string[];
		ICT: string[];
		HUMMS: string[];
		HE: string[];
		GAS: string[];
		ABM: string[];
	};
	"12": {
		STEM: string[];
		ICT: string[];
		HUMMS: string[];
		HE: string[];
		GAS: string[];
		ABM: string[];
	};
}
const gradeList: GradeList = {
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
interface Strand {
	STEM: string[];
	ICT: string[];
	HUMMS: string[];
	HE: string[];
	GAS: string[];
	ABM: string[];
}

function sectionGetter(
	grade: keyof GradeList | string,
	strand: keyof Strand | string
): string[] | void {
	if ((grade as string) === "" || (strand as string) === "") {
		return void 0;
	}
	return gradeList[grade as keyof GradeList][strand as keyof Strand];
}
sectionGetter("11", "ICT");
export default sectionGetter;

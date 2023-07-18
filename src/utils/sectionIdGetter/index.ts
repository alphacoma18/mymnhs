// TODO: Baliktarin

interface ISections {
	Pythagoras: number;
	Euclid: number;
	Archimedes: number;
	Torvalds: number;
	Jobs: number;
	Gates: number;
	Dell: number;
	Socrates: number;
	Plato: number;
	Aristotle: number;
	Laurentis: number;
	Laudico: number;
	Rizal: number;
	Bonfacio: number;
	Plaridel: number;
	Aguinaldo: number;
	Hamilton: number;
	Pacioli: number;
	Porter: number;
	Smith: number;
	Newton: number;
	Kepler: number;
	Einstein: number;
	Pascal: number;
	Hollerith: number;
	Babbage: number;
	Confucious: number;
	Siddhartha: number;
	Escoffier: number;
	Mabini: number;
	Balagtas: number;
	Morgan: number;
	Ford: number;
}
const sections = {
	Pythagoras: 1,
	Euclid: 2,
	Archimedes: 3,
	Torvalds: 4,
	Jobs: 5,
	Gates: 6,
	Dell: 7,
	Socrates: 8,
	Plato: 9,
	Aristotle: 10,
	Laurentis: 11,
	Laudico: 12,
	Rizal: 13,
	Bonfacio: 14,
	Plaridel: 15,
	Aguinaldo: 16,
	Hamilton: 17,
	Pacioli: 18,
	Porter: 19,
	Smith: 20,
	Newton: 21,
	Kepler: 22,
	Einstein: 23,
	Pascal: 24,
	Hollerith: 25,
	Babbage: 26,
	Confucious: 27,
	Siddhartha: 28,
	Escoffier: 29,
	Mabini: 30,
	Balagtas: 31,
	Morgan: 32,
	Ford: 33,
};
export default async function sectionIdGetter(
	section: string,
): Promise<number | void> {
	if (section === "") return void 0;
	return sections[section as keyof ISections];
}

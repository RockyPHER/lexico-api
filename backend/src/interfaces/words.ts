export interface AddWordDto {
    name: String;
    syllables: String[];
    meanings: Meaning[];
    synonyms?: String[];
    antonyms?: String[];
    etmology?: String;
    rhymes?: String[];
    plural?: String;
}

interface Meaning {
    grammar_class: String,
    definitions?: String[];
}

export interface IWord {
    name: String;
    syllables?: String[];
    meanings?: Meaning[];
    synonyms?: String[];
    antonyms?: String[];
    etmology?: String;
    rhymes: String[];
    plural: String;
}
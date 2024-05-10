export interface AddWordDto {
    name: String;
    syllables?: String[];
    grammar_class: String;
    definition?: String[];
    synonym?: String[];
    antonym?: String[];
    etmology?: String;
    rhyme?: String[];
    plural?: String;
}

export interface IWord {
    name: String;
    syllables?: String[];
    grammar_class: String[];
    definition?: String[];
    synonym?: String[];
    antonym?: String[];
    etmology?: String;
    rhyme: String[];
    plural: String;
}
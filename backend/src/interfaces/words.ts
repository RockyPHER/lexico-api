export interface AddWordDto {
    name: String;
    syllables?: String[];
    class: String[];
    definition?: String[];
    synonym?: String[];
    antonym?: String[];
    etmology?: String;
    rhyme: String[];
    plural: String;
}
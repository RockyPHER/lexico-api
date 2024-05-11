import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    syllables: [{ type: String, required: false }],
    meanings: [{
        grammar_class: {
            type: String,
            required: true
        },
        definition: [{
            type: String,
            required: false
        }]
    }],
    synonym: [{
        type: String,
        required: false,
    }],
    antonym: [{
        type: String,
        required: false,
    }],
    etmology: {
        type: String,
        required: false,
    },
    rhyme: [{
        type: String,
        required: false,
    }],
    plural: {
        type: String,
        required: false,
    },
},
    {
        query: {
            byName(name) {
                return this.where({ name: new RegExp(name, 'i') });
            }
        }
    });

const Word = mongoose.model("Word", wordSchema);

export { Word };
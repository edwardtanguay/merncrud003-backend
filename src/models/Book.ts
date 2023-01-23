import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 255
	},
	description: String,
	language: String,
	imageUrl: String,
	buyUrl: String,
	whenPurchased: {
		type: Date,
		default: () => Date.now()
	},
	notes: [String],
	author: {
		firstName: String,
		lastName: String,
		age: Number
	},
	email: {
		type: String,
		lowercase: true,
		validate: {
			validator: function (v) {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
			},
			message: "Please enter a valid email, e.g. name@company.com"
		},
	},
	numberOfPages: {
		type: Number,
		min: 10,
		max: 2000,
		required: true
	},
})

export const Book = mongoose.model('book', bookSchema);
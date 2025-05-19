const cloudinary = require("cloudinary").v2
const multer = require("multer")
const { CloudinaryStorage } = require("multer-storage-cloudinary")

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
})

const storage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: "resumes",
		allowed_formats: ["pdf", "doc", "docx"],
		resource_type: "auto",
	},
})

const upload = multer({ storage })

module.exports = { cloudinary, storage, upload }
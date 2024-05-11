const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;

// Định nghĩa cấu hình cho việc lưu trữ ảnh
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Thư mục lưu trữ ảnh tải lên
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Giữ nguyên tên file
    },
});

const upload = multer({ storage: storage });

// Định nghĩa endpoint để tải ảnh lên
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No files were uploaded.');
    }

    res.send('File uploaded successfully.');
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

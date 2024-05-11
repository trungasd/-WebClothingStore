function showImagePreview(input) {
    if (input.files && input.files.length > 0) {
        const tbody = document.querySelector('#tbHtml');
        const imageNames = []; // Khai báo mảng imageNames ở phạm vi hàm
        const imageInputs = document.querySelectorAll('[id^="imageUrl"]');
        const limit = 3; // Giới hạn số lượng ảnh

        // Xóa các input ẩn cũ đi
        imageInputs.forEach((input) => input.remove());

        // Lặp qua từng file ảnh được chọn và lưu tên của nó vào mảng imageNames
        for (let i = 0; i < Math.min(input.files.length, limit); i++) {
            imageNames.push(input.files[i].name);

            // Hiển thị hình ảnh và lưu tên vào input ẩn
            const imagePreview = document.createElement('img');
            imagePreview.src = URL.createObjectURL(input.files[i]);
            imagePreview.style.maxWidth = '100px';
            imagePreview.style.maxHeight = '100px';
            imagePreview.style.display = 'block';
            imagePreview.style.margin = 'auto';

            const newRow = tbody.insertRow(); // Tạo một hàng mới
            const cellImage = newRow.insertCell();
            cellImage.appendChild(imagePreview);

            const imageUrlInput = document.createElement('input');
            imageUrlInput.type = 'hidden';
            imageUrlInput.id = `imageUrl${i + 1}`;
            imageUrlInput.name = `imageUrl${i + 1}`;
            imageUrlInput.value = imageNames[i];
            cellImage.appendChild(imageUrlInput);

            // Thêm nút xóa vào hàng
            const cell = newRow.insertCell();
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Xóa';
            deleteButton.addEventListener('click', function () {
                // Xóa tên ảnh khỏi mảng imageNames
                imageNames.splice(i, 1);
                // Cập nhật lại giá trị của các input ẩn
                updateHiddenInputs(imageNames);
                // Xóa hàng chứa nút xóa
                this.parentNode.parentNode.remove();
            });
            cell.appendChild(deleteButton);
        }

        // Cập nhật lại giá trị của các input ẩn nếu có thay đổi
        updateHiddenInputs(imageNames);
    }
}

function updateHiddenInputs(imageNames) {
    const imageInputs = document.querySelectorAll('[id^="imageUrl"]');
    imageInputs.forEach((input, index) => {
        if (index < imageNames.length) {
            input.value = imageNames[index];
        }
    });
}

function showImagePreviewNew(input) {
    if (input.files && input.files.length > 0) {
        const tbody = document.querySelector('#tbHtml');
        const imageNames = []; // Khai báo mảng imageNames ở phạm vi hàm
        const imageInputs = document.querySelectorAll('[id^="imagenew"]');
        const limit = 3; // Giới hạn số lượng ảnh

        // Xóa các input ẩn cũ đi
        imageInputs.forEach((input) => input.remove());

        // Lặp qua từng file ảnh được chọn và lưu tên của nó vào mảng imageNames
        for (let i = 0; i < Math.min(input.files.length, limit); i++) {
            imageNames.push(input.files[i].name);

            // Hiển thị hình ảnh và lưu tên vào input ẩn
            const imagePreview = document.createElement('img');
            imagePreview.src = URL.createObjectURL(input.files[i]);
            imagePreview.style.maxWidth = '100px';
            imagePreview.style.maxHeight = '100px';
            imagePreview.style.display = 'block';
            imagePreview.style.margin = 'auto';

            const newRow = tbody.insertRow(); // Tạo một hàng mới
            const cellImage = newRow.insertCell();
            cellImage.appendChild(imagePreview);

            const imageUrlInput = document.createElement('input');
            imageUrlInput.type = 'hidden';
            imageUrlInput.id = `imagenew${i + 1}`;
            imageUrlInput.name = `imagenew${i + 1}`;
            imageUrlInput.value = imageNames[i];
            cellImage.appendChild(imageUrlInput);

            // Thêm nút xóa vào hàng
            const cell = newRow.insertCell();
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Xóa';
            deleteButton.addEventListener('click', function () {
                // Xóa tên ảnh khỏi mảng imageNames
                imageNames.splice(i, 1);
                // Cập nhật lại giá trị của các input ẩn
                updateHiddenInputsNew(imageNames);
                // Xóa hàng chứa nút xóa
                this.parentNode.parentNode.remove();
            });
            cell.appendChild(deleteButton);
        }

        // Cập nhật lại giá trị của các input ẩn nếu có thay đổi
        updateHiddenInputsNew(imageNames);
    }
}

function updateHiddenInputsNew(imageNames) {
    const imageInputs = document.querySelectorAll('[id^="imagenew"]');
    imageInputs.forEach((input, index) => {
        if (index < imageNames.length) {
            input.value = imageNames[index];
        }
    });
}

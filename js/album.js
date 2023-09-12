
 var urlImagens = [
    "https://images.pexels.com/photos/4050289/pexels-photo-4050289.jpeg",
    "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
    "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg",
    "https://images.pexels.com/photos/4050289/pexels-photo-4050289.jpeg",
    "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
    "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg",
    "https://images.pexels.com/photos/4050289/pexels-photo-4050289.jpeg",
    "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
    "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg",
    "https://images.pexels.com/photos/4050289/pexels-photo-4050289.jpeg",
    "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
    "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg",
   
];

var albumDiv = document.getElementById("album");

// Loop através da lista de imagens e criar elementos <img> para cada uma

for (var i = 0; i < urlImagens.length; i++) {
    var imagem = document.createElement("img");
    imagem.src = urlImagens[i];
    imagem.alt = "Imagem " + (i + 1);

    albumDiv.appendChild(imagem);
}

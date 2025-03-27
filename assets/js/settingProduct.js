// Settings Product disini
// format nya:
/*
image: URL gambar produk untuk ditampilkan di halaman.
title: Nama produk yang ditampilkan sebagai judul.
specs: Spesifikasi singkat produk, misalnya kapasitas RAM, CPU, atau fitur utama.
rating: Rating produk dalam bentuk angka (maksimal 5.0), digunakan untuk tampilan bintang.
priceBefore: Harga sebelum diskon dalam satuan Rupiah (Rp).
priceAfter: Harga setelah diskon dalam satuan Rupiah (Rp).
stock: Jumlah stok produk yang tersedia.
description: Deskripsi singkat mengenai produk dan fitur utamanya.
seller: Nama penjual atau toko yang menjual produk ini.
whatsapp: Link WhatsApp untuk menghubungi penjual langsung.
category: Kategori produk, digunakan untuk mengelompokkan item berdasarkan jenis layanan.
*/

const products = [
    {
        image: "../assets/image/game1.jpg",
        title: "PACKET RDP/VPS HIGH",
        specs: "4GB | 2vCPU | BA 4TB |GARANSI 20DAY",
        rating: 5.0,
        priceBefore: 35000,
        priceAfter: 30000,
        stock: 257282,
        description: "ACTIVE EXPIRED 30DAYS | Support: Ubuntu, Debian, AlmaLinux, RockyLinux, CentOs, Windows",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan VPS",
        icon: "fas fa-server"
    },
    {
        image: "../assets/image/game1.jpg",
        title: "PACKET RDP/VPS HIGH",
        specs: "8GB | 4vCPU | BA 6TB | GARANSI 20DAY",
        rating: 5.0,
        priceBefore: 40000,
        priceAfter: 35000,
        stock: 257282,
        description: "ACTIVE EXPIRED 30DAYS | Support: Ubuntu, Debian, AlmaLinux, RockyLinux, CentOs, Windows",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan VPS",
        icon: "fas fa-server"
    },
    {
        image: "../assets/image/game1.jpg",
        title: "PACKET RDP/VPS HIGH",
        specs: "16GB | 4vCPU | BA 8TB | GARANSI 20DAY",
        rating: 5.0,
        priceBefore: 50000,
        priceAfter: 45000,
        stock: 257282,
        description: "ACTIVE EXPIRED 30DAYS | Support: Ubuntu, Debian, AlmaLinux, RockyLinux, CentOs, Windows",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan VPS",
        icon: "fas fa-server"
    },
    {
        image: "../assets/image/game7.jpg",
        title: "PACKET RDP/VPS LOW",
        specs: "4GB | 2vCPU | GARANSI 15DAY",
        rating: 5.0,
        priceBefore: 30000,
        priceAfter: 25000,
        stock: 257282,
        description: "ACTIVE EXPIRED 30DAYS | Support: Ubuntu, Debian, AlmaLinux, RockyLinux, CentOs, Windows",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan VPS",
        icon: "fas fa-server"
    },
    {
        image: "../assets/image/game7.jpg",
        title: "PACKET RDP/VPS LOW",
        specs: "8GB | 4vCPU | GARANSI 15DAY",
        rating: 5.0,
        priceBefore: 35000,
        priceAfter: 30000,
        stock: 257282,
        description: "ACTIVE EXPIRED 30DAYS | Support: Ubuntu, Debian, AlmaLinux, RockyLinux, CentOs, Windows",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan VPS",
        icon: "fas fa-server"
    },
    {
        image: "../assets/image/game7.jpg",
        title: "PACKET RDP/VPS LOW",
        specs: "16GB | 4vCPU | GARANSI 15DAY",
        rating: 5.0,
        priceBefore: 40000,
        priceAfter: 35000,
        stock: 257282,
        description: "ACTIVE EXPIRED 30DAYS | Support: Ubuntu, Debian, AlmaLinux, RockyLinux, CentOs, Windows",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan VPS",
        icon: "fas fa-server"
    },
    {
        image: "../assets/image/game6.jpg",
        title: "ReadyUP GTPS 4GB",
        specs: "READY UP GTPS",
        rating: 4.0,
        priceBefore: 40000,
        priceAfter: 38000,
        stock: 782619,
        description: "Ready UP GTPS Normal.",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan GTPS",
        icon: "fas fa-server"
    },
    {
        image: "../assets/image/game6.jpg",
        title: "ReadyUP GTPS 8GB",
        specs: "READY UP GTPS",
        rating: 4.5,
        priceBefore: 55000,
        priceAfter: 45000,
        stock: 782619,
        description: "Ready UP GTPS Medium.",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan GTPS",
        icon: "fas fa-server"
    },
    {
        image: "../assets/image/game6.jpg",
        title: "ReadyUP GTPS 16GB",
        specs: "READY UP GTPS",
        rating: 5.0,
        priceBefore: 80000,
        priceAfter: 65000,
        stock: 99999,
        description: "Ready UP GTPS High.",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan GTPS",
        icon: "fas fa-server"
    },
    {
        image: "../assets/image/game13.jpg",
        title: "Panel DO",
        specs: "PANEL DIGITAL OCEAN 3DROPLET",
        rating: 5.0,
        priceBefore: 100000,
        priceAfter: 95000,
        stock: 15,
        description: "DigitalOcean adalah sebuah platform cloud computing yang menyediakan layanan infrastruktur sebagai layanan (IaaS) untuk pengembang dan bisnis.",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan Panel",
        icon: "fas fa-crown"
    },
    {
        image: "../assets/image/game13.jpg",
        title: "Panel DO",
        specs: "PANEL DIGITAL OCEAN 10DROPLET",
        rating: 5.0,
        priceBefore: 170000,
        priceAfter: 140000,
        stock: 20,
        description: "DigitalOcean adalah sebuah platform cloud computing yang menyediakan layanan infrastruktur sebagai layanan (IaaS) untuk pengembang dan bisnis.",
        seller: "ROG STORE",
        whatsapp: "https://wa.me/62882016296819",
        category: "Layanan Panel",
        icon: "fas fa-crown"
    }
];


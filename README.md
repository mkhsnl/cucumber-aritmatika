# Test Scenario dan Test Case untuk Aplikasi Operasi Aritmatika

### Aplikasi Aritmatika 
Deskripsi: Aplikasi ini melakukan operasi dasar Aritmatika (penjumlahan, pengurangan, perkalian, dan pembagian) pada dua angka.

### Pengertian Cucumber 
Cucumber adalah sebuah framework BDD (Behavior-Driven Development) open-source yang digunakan untuk menulis skenario pengujian dalam format yang dapat dibaca oleh manusia. Cucumber didasarkan pada bahasa pemrograman Gherkin, yang memungkinkan penulisan skenario pengujian dengan cara yang mudah dipahami oleh semua pihak terkait dalam pengembangan perangkat lunak, termasuk pengembang, tester, dan pelanggan.

## Test Scenario and Test Case


1. Test Scenario: Adding Two Numbers

  Test Case:

  Given: Pengguna memasukkan dua angka untuk ditambahkan.
  When: Pengguna melakukan perhitungan untuk penambahan.
  Then: Aplikasi menampilkan hasil dari penambahan kedua angka tersebut.

Data Uji:

  Input 1: 5, Input 2: 10 (Expected Result: 15)
  Input 1: -3, Input 2: 8 (Expected Result: 5)

2. Test Scenario: Subtracting Two Numbers

  Test Case:

  Given: Pengguna memasukkan dua angka untuk dikurangkan.
  When: Pengguna melakukan perhitungan untuk pengurangan.
  Then: Aplikasi menampilkan hasil dari pengurangan kedua angka tersebut.

Data Uji:

  Input 1: 10, Input 2: 4 (Expected Result: 6)
  Input 1: 7, Input 2: 12 (Expected Result: -5)

3. Test Scenario: Multiplying Two Numbers

  Test Case:

  Given: Pengguna memasukkan dua angka untuk dikalikan.
  When: Pengguna melakukan perhitungan untuk perkalian.
  Then: Aplikasi menampilkan hasil dari perkalian kedua angka tersebut.

Data Uji:

  Input 1: 3, Input 2: 5 (Expected Result: 15)
  Input 1: -2, Input 2: 4 (Expected Result: -8)

4. Test Scenario: Dividing Two Numbers

  Test Case:

  Given: Pengguna memasukkan dua angka untuk dibagi.
  When: Pengguna melakukan perhitungan untuk pembagian.
  Then: Aplikasi menampilkan hasil dari pembagian kedua angka tersebut.

Data Uji:

  Input 1: 20, Input 2: 4 (Expected Result: 5)
  Input 1: 7, Input 2: 0 (Expected Result: Error Message: "Division by zero is not allowed")
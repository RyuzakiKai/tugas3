<template>
  <div class="produk">

  </div>

  <h3>MENU</h3>
    <table >
      <tr>
        <th>Makanan</th>
        <th>Harga</th>
      </tr>
      <tr>
        <td>Dada</td>
        <td>10k</td>
      </tr>
      <tr>
        <td>paha</td>
        <td>9k</td>
      </tr>
      <tr>
        <td>sayap</td>
        <td>8k</td>
      </tr>
    </table>
    <br>
    <table >
      <tr>
        <th>Minuman</th>
        <th>harga</th>
      </tr>
      <tr>
        <td>air mineral</td>
        <td>6k</td>
      </tr>
      <tr>
        <td>Sprite</td>
        <td>8k</td>
      </tr>
      <tr>
        <td>Fanta</td>
        <td>8k</td>
      </tr>
      <tr>
        <td>Coca Cola</td>
        <td>8k</td>
      </tr>
    </table>
<br>
  <br>
    <div>
      <h6>Untuk Menu Lebih Mahal silahkan kunjungi
        <a href="https://kfcku.com/food">KFC Original</a>
      </h6>
    </div>
<br>
    <span>Kritik dan saran untuk toko kami:</span>
    <p style="white-space: pre-line;">{{ pesan }}</p>
    <textarea v-model="pesan" placeholder="Kirim pesan" ></textarea>
    <p>

    </p>



</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

table, th, td {
  border:2px solid #dfa852;}

</style>
<style>
form {margin-top: 1%;}
body  {
  background-size: cover;
  background-image: url('/bg ayam.jpg');
  background-color: #cccccc;

}
</style>
<style>
body {
  font-size: 20px;
}


</style>


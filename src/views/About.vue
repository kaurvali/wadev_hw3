<template>
  <div class="about">
    <h1>About us!</h1>
    <p>The great team of postIt developers behind this fun page:</p>
     <table class="center">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Matriculum</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.id}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            users: [
                { name: 'Kaur Vali', email: 'kaur.vali@postit.com', id: 'C05051' },
                { name: 'Markus Sulg', email: 'markus.sulg@postit.com', id: 'B59673' },
                { name: 'Lisa-Batricia Karu', email: 'lisabatricia.karu@postit.com', id: 'B97060' }
            ]
        };
    }
};
</script>



<style scoped lang="scss">
h1 {
  padding-top: 5%;
  margin-bottom: 25px;
}
p {
  color: #666;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
}
table {
  
	background-color: lightgray;
  margin: 10%;
}
td {
  padding: 10px;
}
table{
  border: 2px solid black;
  
}
tbody{
  align-items: center;
}
 table.center {
    width:70%; 
    margin-left: auto; 
    margin-right: auto;
  }
  
</style>


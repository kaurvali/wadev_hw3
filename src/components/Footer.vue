<template>
    <div class="footer">
        <div class="logo">
            <a href=index.html><img src="../assets/logo-120.png" id="footer_img" alt="logo"></a>
        </div>
        <div class="other">
            <h3>This is postIt!</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style scoped lang="scss">
.footer{
    background-color: lightcyan;
    padding: 30px;

    display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
    align-items: center;

    .logo img{
        height: 50px;
        width: auto;
    }

    .info h3{
        color: black;
    }
}
</style>
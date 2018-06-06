<template>
    <div id="welcome">
        <h1>Добро пожаловать!</h1>
        <p>Здесь должно быть какое-то описание, просто чтобы занять место для вида</p>
        <div class="cta">
            <router-link to="/signup">Регистрация</router-link>
            <router-link to="/signin">Войти</router-link>
        </div>
    </div>
</template>

<style scoped>
    #welcome {
        width: 80%;
        margin: auto;
    }

    h1 {
        text-align: center;
    }

    p {
        text-align: center;
    }

    .cta {
        width: 300px;
        margin: auto;
        text-align: center;
    }

    .cta a {
        margin: 10px;
        text-decoration: none;
        display: inline-block;
        border: 1px solid #521751;
        border-radius: 3px;
        width: 125px;
        padding: 10px;
        box-sizing: border-box;
        color: #521751;
    }

    .cta a:hover,
    .cta a:active {
        background-color: #521751;
        color: white;
    }
</style>

<template>
    <div id="dashboard">
        <h1>Тут информация о пользователе!</h1>
        <p>Вы сможете попасть сюда, только авторизовавшись!</p>
        <p v-if="email">Ваш ящик: {{ email }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            email() {
                return !this.$store.getters.user ? false : this.$store.getters.user.email
            }
        },
        created() {
            this.$store.dispatch('fetchUser')
        }
    }
</script>

<style scoped>
    h1, p {
        text-align: center;
    }

    p {
        color: red;
    }
</style>

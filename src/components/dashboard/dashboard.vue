<template>
    <div id="dashboard">
        <h1>Тут информация о пользователе!</h1>
        <p>Вы сможете попасть сюда, только авторизовавшись!</p>
        <p>Ваш ящик: {{ email }}</p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                email: ''
            }
        },
        created() {
            axios.get('/users.json')
                .then(res => {
                    console.log(res)
                    const data = res.data
                    const users = []
                    for (let key in data) {
                        const user = data[key]
                        user.id = key
                        users.push(user)
                    }
                    console.log(users)
                    this.email = users[0].email
                })
                .catch(error => console.log(error))
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

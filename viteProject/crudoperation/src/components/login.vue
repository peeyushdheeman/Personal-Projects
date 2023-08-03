<template>
    <v-sheet class="pa-12 containerr" rounded>
        <v-row class="rowContainer">
            <v-col cols="6" class="cardOne">

                <img src="https://developers.google.com/identity/passkeys/key-visual.png">

            </v-col>
            <v-col cols="6">
                <v-card class="mx-auto px-2 py-2 cardTwo">
                    <h1>Sign In</h1>

                    <v-form v-model="form" @submit.prevent="onSubmit">
                        <v-text-field v-model="email" :readonly="loading" :rules="[required, emailValidation]" class="mb-2"
                            clearable label="Email"></v-text-field>

                        <v-text-field v-model="password" :readonly="loading" :rules="[required, passwordValidation]"
                            clearable label="Password" placeholder="Enter your password"></v-text-field>

                        <br>
                        <p><a href="#">Forgot Password</a></p>
                        <br>
                        <v-btn :loading="loading" block color="primary" size="large" type="submit" variant="elevated">
                            Sign In
                        </v-btn>
                        <br>

                        <p @click="signup">
                            Don't have account <router-link to="/signup">Sign Up </router-link>
                        </p>
                        <br>

                    </v-form>
                </v-card>
            </v-col>
        </v-row>

    </v-sheet>
</template>
  
<script>
import { ref } from 'vue';
//   import Vuetify from './plugins/vuetify'
//   import 'vuetify/dist/vuetify.min.css'
import { useRouter } from 'vue-router'
export default {
    name: "log-in",
    setup() {
        const form = ref(false);
        const email = ref(null);
        const password = ref(null);
        const loading = ref(false);

        const emailVal = ref(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/);
        const passVal = ref(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/);
        const onSubmit = () => {
            if (!form.value) return;

            loading.value = true;

            setTimeout(() => (loading.value = false), 2000);
        };

        const required = (v) => {
            return !!v || 'Field is required';
        };
        function emailValidation() {
            if (emailVal.value.test(email.value)) {
                return ''
            }
            else {
                return 'email is not valid'
            }
        }
        function passwordValidation() {
            if (passVal.value.test(password.value)) {
                return ''
            } else {
                return 'password should be strong, eg Abcd@123'
            }
        }

        return {
            form,
            email,
            password,
            loading,
            onSubmit,
            required,
            emailVal,
            emailValidation,
            passwordValidation,

            // Vuetify,
        };
    },
};
</script>
<style scoped>
.containerr {
    background-color: #f8f2f2d8;
    width: 100%;
    height: 100vh;
    align-items: center;

}

.rowContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    height: 500px;
    width: 60%;
    align-content: center;
    border-radius: 10px;

}

img {
    height: 412px;
    width: 160%;
    background-size: cover;
}

.v-col-6 {
    flex: 1 0 50%;
    max-width: 100%;
}

.cardOne {
    /* float: right; */
    width: 100%;
    /* max-width: 344px; */
}

.cardTwo {
    float: left;
    width: 100%;
    max-width: 344px;
    box-shadow: none;
    border-radius: 1px;
}
</style>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  
  
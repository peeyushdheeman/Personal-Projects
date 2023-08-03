<template>
    <v-sheet class="pa-12 containerr" rounded>

        <v-row class="rowContainer">
            <v-col cols="6" class="cardOne">

                <img src="https://as1.ftcdn.net/v2/jpg/03/70/92/84/1000_F_370928450_R6g8c0j5cey86PUXE32W7KMiqIUe1fOI.jpg">

            </v-col>
            <v-col cols="6">

                <v-card class=" px-2 py-2 cardTwo ">
                    <h1>Sign Up</h1><br>
zip
                    <v-form v-model="form" @submit.prevent="onSubmit">
                        <v-text-field v-model="fname" :readonly="loading" :rules="[required]" class="name" clearable
                            label="First Name"></v-text-field>
                        <v-text-field v-model="lname" :readonly="loading" :rules="[required]" class="mb-2 name" clearable
                            label="Last Name"></v-text-field>
                        <v-text-field v-model="phoneNumber" :readonly="loading" :rules="[required, phoneValidation]"
                            class="mb-0" clearable label="Phone Number"></v-text-field>
                        <v-text-field v-model="email" :readonly="loading" :rules="[required, emailValidation]" class="mb-2"
                            clearable label="Email"></v-text-field>

                        <v-text-field v-model="password" :readonly="loading" :rules="[required, passwordValidation]"
                            class="mb-0" clearable label="Password" placeholder="Enter your password"></v-text-field>
                        <v-text-field v-model="cpassword" :readonly="loading" :rules="[required, passwordVal]" class="mb-2"
                            clearable label="Confirm Password" placeholder="confirm password"></v-text-field>
                        <br>

                        <v-btn block color="success" size="large" type="submit" variant="elevated">
                            Sign Up
                        </v-btn>
                        <br>


                        <br>

                    </v-form>
                </v-card>
            </v-col>
        </v-row>

    </v-sheet>
</template>
  
<script>
import { validate } from 'vee-validate';
import { ref } from 'vue';
// import { useField, useForm } from 'vee-validate';
// import { required, email } from '@vee-validate/rules';
//   import Vuetify from './plugins/vuetify'
//   import 'vuetify/dist/vuetify.min.css'

export default {
    name: "signUP",
    setup() {
        const form = ref(false);
        const fname = ref(null);
        const lname = ref(null);
        const phoneNumber = ref(null);
        const email = ref(null);
        const password = ref(null);
        const cpassword = ref(null);
        const loading = ref(false);
        const emailVal = ref(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/);
        const phoneNumberRegex = ref(/^\d{10}$/);
        const passVal = ref(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/);

        // const { value: emailValue, errorMessage: emailError } = useField('email', email, required, email);
        // const { value: passwordValue, errorMessage: passwordError } = useField('password', password, required);
        // const { value: cpasswordValue, errorMessage: cpasswordError } = useField('cPassword', cpassword, required);


        //         const rules = {
        //     name: {
        //       required: true,
        //       minLength: 2,
        //       maxLength: 20
        //     },
        //     email: {
        //       required: true,
        //       email: true
        //     },
        //     phone: {
        //       required: true,
        //       minLength: 10,
        //       maxLength: 10,
        //       numeric: true
        //     }
        //   }

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
                return '';
            }
            else {
                return 'email is not valid'
            }
        };
        function phoneValidation() {
            if (phoneNumberRegex.value.test(phoneNumber.value)) {
                return '';
            }
            else {
                return 'Phone number is not valid'
            }
        };
        function passwordVal() {
            if (cpassword.value == password.value) {
                return '';
            }
            else {
                return 'Password should be mathed';
            }
        };
        function passwordValidation() {
            if (passVal.value.test(password.value)) {
                return ''
            } else {
                return 'password should be strong, eg Abcd@123'
            }
        };


        return {
            form,
            fname,
            lname,
            phoneNumber,
            email,
            password,
            cpassword,
            loading,
            onSubmit,
            required,
            emailValidation,
            emailVal,
            phoneNumberRegex,
            phoneValidation,
            passwordVal,
            passVal,
            passwordValidation,

            // useField,
            // useForm,
            // emailValue,
            // passwordValue,
            // cpasswordValue,
            // emailError,
            // passwordError,
            // cpasswordError,
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
    height: 600px;
    width: 60%;
    align-content: center;
    border-radius: 10px;

}

img {
    height: 600px;
    width: 160%;
    margin-left: -12px;
    border-radius: 10px 0px 0px 10px;
}

.cardOne {
    float: right;
    width: 100%;
    max-width: 344px;
    height: 600px;

}

.cardTwo {
    width: 120%;
    height: 600px;
    box-shadow: none;
    padding-right: 50px;
    flex: 1% 0% 50%;
    max-width: unset;
    border-radius: 0px;
}

.v-col-6 {
    flex: 1 0 50%;
    max-width: 45%;
}

.name {
    width: 50%;
    display: inline-block;
    padding-right: 10px;

}
</style>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  
  
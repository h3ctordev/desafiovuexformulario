<template>
  <b-container class="my-5 w-75">
    <h2 class="my-5 text-center">Desafio Formulario Con Vuex- Héctor Bustos</h2>
    <v-form :fields="fields" :values="values" @send-form="onSendForm" />
    <b-row align-h="end" class="m-5">
      <b-button variant="outline-primary" to="/tabla" size="lg" pill>
        Ir a Tabla
        <b-icon icon="arrow-right"></b-icon>
      </b-button>
    </b-row>
  </b-container>
</template>

<script>
import VForm from "@/components/VForm.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    VForm,
  },
  data() {
    return {
      values: {
        firstname: "",
        lastname: "",
        dob: "",
        email: "",
        password: "",
      },
      fields: [
        {
          key: "firstname",
          label: "Nombre",
          required: true,
          minlength: 2,
          messages: {
            success: "Correcto!",
            errors: {
              required: "El Nombre es requerido",
              minlength: "Debe tener al menos 2 (dos) caracteres",
            },
          },
        },
        {
          key: "lastname",
          label: "Apellido",
          required: true,
          messages: {
            success: "Correcto!",
            errors: {
              required: "El Apellido es requerido",
            },
          },
        },
        {
          key: "email",
          label: "Email",
          required: true,
          type: "email",
          messages: {
            success: "Correcto!",
            errors: {
              required: "El Mail es requerido",
              email: "El Mail no es valido",
            },
          },
        },
        {
          key: "password",
          label: "Clave",
          required: true,
          type: "password",
          passwd: true,
          messages: {
            success: "Correcto!",
            errors: {
              required: "La clave es requerida",
              passwd:
                "La clave debe teenr almenos 8 caracteres, mayusculas, minusculas y un caracteres especial",
            },
          },
        },
        {
          key: "dob",
          label: "Fecha de Nacimiento",
          required: true,
          type: "date",
          messages: {
            success: "Correcto!",
            errors: {
              required: "La fecha es requerida",
            },
          },
        },
      ],
    };
  },
  methods: {
    ...mapActions("forms", ["sendFormData"]),
    async onSendForm(value) {
      try {
        // this.items.push({ ...value });
        const res = await this.sendFormData({ ...value });
        console.log(res);
        this.values = {
          firstname: "",
          lastname: "",
          years: "",
        };
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

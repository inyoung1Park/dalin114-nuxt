<template>
  <div>
    <h1>Logging out</h1>
    <hr>

    <p>Please wait...</p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  layout: 'vuetify',
  async asyncData(context){
    await context.$auth.logout()
  },
}
</script>

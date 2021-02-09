<template>
  <q-layout view="lHh Lpr lFf">
    <div class="bg-blue-1 text-bold text-green-10">
      <q-toolbar>
        <div class="col-md-2 col-xs-0"></div>
        <q-btn to="/" flat round dense icon="home" class="q-mr-sm" />
        <div><strong>PSS </strong>Tibagi</div>
        <q-space />
        <q-btn-dropdown flat dense label="minhas inscrições">
          <q-list>
            <q-item :to="{ name: 'inscricaoUsuario'}" clickable v-close-popup>
              <q-item-section>
                <q-item-label>Inscrições</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section @click="sair">
                <q-item-label>Sair</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="col-md-2 col-xs-0"></div>
      </q-toolbar>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  },
  methods: {
    sair () {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>

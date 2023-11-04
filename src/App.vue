<!-- @format -->

<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Juno</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item me-2">
              <router-link :to="`/juno/${getWallet()}`"> Profile </router-link>
            </li>
            <li class="nav-item me-2">
              <router-link :to="`/juno/ht/`"> Hashtag </router-link>
            </li>
          </ul>
        </div>

        <div class="d-flex">
          <WalletMultiButton />
        </div>

        <button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </div>

  <router-view />
</template>

<script>
import { WalletMultiButton, initWallet } from "solana-wallets-vue";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { useWorkspace } from "@/modules/juno/composables";

export default {
  components: { WalletMultiButton },
  setup() {
    const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

    initWallet({ wallets, autoConnect: true });

    const { getWallet } = useWorkspace();

    return { getWallet };
  },
};
</script>

<style>
#nav {
  padding: 10px;
  padding-bottom: 0px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a:link,
a:visited,
a:active {
  text-decoration: none;
}
</style>

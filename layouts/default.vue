<script lang="ts" setup>
import { account } from '~/lib/appwrite'

const isLoadingStore = useIsLoadingStore()
const store = useAuthStore()
const router = useRouter()

onMounted(async () => {
	try {
		const user = await account.get()
		if (user) store.set(user)
	} catch (error) {
		router.push('/login')
	} finally {
		isLoadingStore.set(false)
	}
})
</script>

<template>
	<LayoutsLoader v-if="isLoadingStore.isLoading" />
	<section v-else :class="{ grid: store.isAuth }" style="min-height: 100vh">
		<LayoutsSidebar v-if="store.isAuth" />
		<div>
			<slot />
		</div>
	</section>
</template>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: 1fr 6fr;
}
</style>

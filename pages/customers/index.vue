<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_CUSTOMERS, DB_ID } from '~/app.constants'
import { DB } from '~/lib/appwrite'
import type { ICustomer } from '~/types/deals.types'

useSeoMeta({
	title: 'Custmers | CRM System',
})

const { data: customers, isLoading } = useQuery({
	queryKey: ['customers'],
	queryFn: () => DB.listDocuments(DB_ID, COLLECTION_CUSTOMERS),
})
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">Наши клиенты</h1>
		<div v-if="isLoading">Loading...</div>
		<UiTable v-else>
			<UiTableHeader>
				<UiTableRow>
					<UiTableHead class="w-[200px]">Изображения</UiTableHead>
					<UiTableHead class="w-[300px]">Наименования</UiTableHead>
					<UiTableHead class="w-[200px]">Email</UiTableHead>
					<UiTableHead>Откуда пришел</UiTableHead>
				</UiTableRow>
			</UiTableHeader>
			<UiTableBody>
				<UiTableRow
					v-for="customer in (customers?.documents as unknown as ICustomer[])"
					:key="customer.$id"
				>
					<UiTableCell>
						<nuxt-link :href="`/customers/edit/${customer.$id}`">
							<NuxtImg
								:src="customer.avatar_url"
								:alt="customer.name"
								width="50"
								height="50"
								class="rounded-full"
							/>
						</nuxt-link>
					</UiTableCell>
					<UiTableCell class="font-medium">
						{{ customer.name }}
					</UiTableCell>
					<UiTableCell>
						{{ customer.email }}
					</UiTableCell>
				</UiTableRow>
			</UiTableBody>
		</UiTable>
	</div>
</template>

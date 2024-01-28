<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
	labelText: {
		type: String,
		default: '',
	},
})
</script>

<template>
	<div class="mb-3">
		<label v-if="labelText" class="opacity-75 mb-0.5 block text-xs" for="">
			{{ labelText }}
		</label>
		<div class="text-base"><slot /></div>
	</div>
</template>

<template>
    <div class="password-tooltip">
        <transition name="fade">
            <div class="password-tooltip__window fs-10"
                 v-if="showToolTip"
            >
                Password must contain 8+ symbols, 1 special and 2 capital letters
            </div>
        </transition>
        <div class="password-tooltip__icon"
             @mouseenter="showToolTip=true"
             @mouseleave="showToolTip=false"
        >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.13983 0.166687C2.92324 0.166687 0.306499 2.78342 0.306499 6.00002C0.306499 9.21662 2.92324 11.8334 6.13983 11.8334C9.35643 11.8334 11.9732 9.21662 11.9732 6.00002C11.9732 2.78342 9.35643 0.166687 6.13983 0.166687ZM5.89678 9.4028C5.49428 9.4028 5.16761 9.07613 5.16761 8.67363C5.16761 8.27113 5.49428 7.94447 5.89678 7.94447C6.29928 7.94447 6.62594 8.27113 6.62594 8.67363C6.62594 9.07613 6.29928 9.4028 5.89678 9.4028ZM7.9924 5.08953C7.84219 5.33016 7.55685 5.60044 7.13587 5.90085C6.45483 6.40446 6.47331 6.51627 6.47331 6.97224H5.27893C5.27893 6.61592 5.27115 6.34224 5.46365 6.00926C5.58664 5.79585 5.81219 5.56884 6.13983 5.3287C6.5331 5.04773 6.91518 4.77697 6.91518 4.30544C6.91518 3.86356 6.53699 3.70606 6.09511 3.70606C5.64449 3.70606 5.13067 3.85335 4.55365 4.14794L4.06219 3.16113C5.11074 2.57342 6.76546 2.30752 7.67011 3.04398C8.33414 3.58502 8.33803 4.53634 7.9924 5.08953Z" fill="#1E1A3E"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PopUp",
        data() {
            return {
                showToolTip: false,
            }
        }
    }
</script>

<style lang="sass">
    @import '../assets/css/tooltip/tooltip'
</style>

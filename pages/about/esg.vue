<template>
    <main>
        <EleDefaultCover
            image="/images/about/esg/cover.jpg"
            image-mobile="/images/about/esg/cover-m.jpg"
            text="ESG"
        ></EleDefaultCover>
        <EleBreadcrumb
            :navigate="breadcrumb"
        />
        <section class="s1" style="background-image: url('/images/about/esg/bg.jpg')">
            <div class="wrap">
                <div class="pla blue">
                    <div class="cate">
                        <svg width="78" height="96" viewBox="0 0 78 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2613_17589)">
                                <path d="M38.6099 93.92C27.4299 90.83 1.91992 73.02 1.91992 53.64V11.79C1.91992 11.79 22.1499 12.07 38.6099 2.23999C55.0699 12.07 75.2999 11.79 75.2999 11.79V53.64C75.2999 73.02 49.7899 90.84 38.6099 93.93V93.92Z" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M52.0898 9.19V20.87L59.7598 28.55V45.64" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M59.7598 54.93C62.3611 54.93 64.4698 52.8213 64.4698 50.22C64.4698 47.6188 62.3611 45.51 59.7598 45.51C57.1585 45.51 55.0498 47.6188 55.0498 50.22C55.0498 52.8213 57.1585 54.93 59.7598 54.93Z" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M40.8195 2.72998V22.8L36.7695 26.85V35.54" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M36.7696 44.83C39.3696 44.83 41.4796 42.72 41.4796 40.12C41.4796 37.52 39.3696 35.41 36.7696 35.41C34.1696 35.41 32.0596 37.52 32.0596 40.12C32.0596 42.72 34.1696 44.83 36.7696 44.83Z" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M24.2901 56.33C26.8901 56.33 29.0001 54.22 29.0001 51.62C29.0001 49.02 26.8901 46.91 24.2901 46.91C21.6901 46.91 19.5801 49.02 19.5801 51.62C19.5801 54.22 21.6901 56.33 24.2901 56.33Z" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M48.5401 67.14C51.1401 67.14 53.2501 65.03 53.2501 62.43C53.2501 59.83 51.1401 57.72 48.5401 57.72C45.9401 57.72 43.8301 59.83 43.8301 62.43C43.8301 65.03 45.9401 67.14 48.5401 67.14Z" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M48.54 67.14V89.36" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M17.5098 36.1C20.1111 36.1 22.2198 33.9913 22.2198 31.39C22.2198 28.7887 20.1111 26.68 17.5098 26.68C14.9085 26.68 12.7998 28.7887 12.7998 31.39C12.7998 33.9913 14.9085 36.1 17.5098 36.1Z" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M27.6201 54.95L33.1001 60.4399V91.76" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M17.51 36.1V40.87L12.75 45.63V57.09L17.35 61.7V81.05" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2613_17589">
                                    <rect width="77.22" height="95.91" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="name">{{ $t('esg.safety') }}</div>
                    </div>
                    <div class="po">
                        <div class="top">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2680_2039)">
                                    <circle cx="18" cy="18" r="18" fill="#1E3296"/>
                                    <path d="M15 15V9M21 15V9M13 21V15M9 21H16V27H11C9.89543 27 9 26.1046 9 25V11C9 9.89543 9.89543 9 11 9H25C26.1046 9 27 9.89543 27 11V15H9M20 24.0266C20 23.3857 20.5 20.561 20.5 20.561L21.625 21.1707L24 18C24 18 28 21.1707 28 24.0266C28 26.5598 25.9498 28 24 28C22.0502 28 20 26.5598 20 24.0266Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2680_2039">
                                        <rect width="36" height="36" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class="t1">{{ $t('esg.safetyMgmtTitle') }}</div>
                            <div class="ab">
                                <div><span>{{ $t('esg.dustproofDesign') }}</span></div>
                                <div><span>{{ $t('esg.pipelineLeakAlarm') }}</span></div>
                                <div><span>{{ $t('esg.dustproofDesign') }}</span></div>
                                <div><span>{{ $t('esg.deviceLowLevelHighTemp') }}</span></div>
                            </div>
                        </div>
                        <img src="/images/about/esg/1-1.jpg" alt="">
                    </div>
                    <div class="po">
                        <div class="top">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2680_3413)">
                                    <circle cx="18" cy="18" r="18" fill="#1E3296"/>
                                    <g clip-path="url(#clip1_2680_3413)">
                                        <path d="M21.4703 20.5C22.7551 21.3082 24.0851 22 25 22C27.2 22 29 20.2 29 18C29 15.8 27.2 14 25 14C22 14 14 22 11 22C8.8 22 7 20.2 7 18C7 15.8 8.8 14 11 14C12.628 14 14.1233 15.2357 15.5 16M15.5 16L15.3587 15.9202M15.5 16L12 17M15.5 16L14.4647 12.1363" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2680_3413">
                                        <rect width="36" height="36" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1_2680_3413">
                                        <rect width="24" height="24" fill="white" transform="translate(6 6)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class=”t1”>{{ $t('esg.etchantCirculationTitle') }}</div>
                            <div class=”ab”>
                                <div><span>{{ $t('esg.zeroEtchantEmission') }}</span></div>
                                <div><span>{{ $t('esg.reduceChemicalUsage') }}</span></div>
                            </div>
                        </div>
                        <img src="/images/about/esg/1-2.jpg" alt="">
                    </div>
                </div>
                <div class="pla green">
                    <div class="cate">
                        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2627_14287)">
                                <path d="M79.8996 48.95C80.5796 49.36 81.2696 49.72 81.8896 50.17C83.0396 51 83.4696 52.35 82.9796 53.71C82.1096 56.15 81.2096 58.59 80.2796 61.01C79.7496 62.38 78.4096 63.13 76.9396 62.88C74.9496 62.54 72.9696 62.17 70.9896 61.79C69.7896 61.56 68.8196 61.97 67.9996 62.83C66.7396 64.15 65.4696 65.46 64.2196 66.79C63.4096 67.65 63.0296 68.65 63.3496 69.83C63.8196 71.62 64.3096 73.4 64.7996 75.19C65.3196 77.11 64.7696 78.34 62.9796 79.18C60.8596 80.18 58.7296 81.17 56.5896 82.14C54.8096 82.95 53.4496 82.56 52.3596 80.95C51.3996 79.53 50.4296 78.12 49.4896 76.68C48.6496 75.4 47.5196 74.84 45.9796 74.96C44.3796 75.08 42.7796 75.1 41.1796 75.13C39.7396 75.16 38.6296 75.71 37.8996 76.99C37.0596 78.48 36.1896 79.96 35.3296 81.44C34.4096 83.03 32.9696 83.57 31.2496 82.94C28.9696 82.1 26.6896 81.26 24.4196 80.41C22.7896 79.8 22.0496 78.54 22.3396 76.82C22.6596 74.91 23.0196 73.01 23.3896 71.11C23.6396 69.84 23.2196 68.84 22.3096 67.98C21.0196 66.77 19.7396 65.54 18.4696 64.32C17.5096 63.4 16.4196 63.08 15.1196 63.44C13.3896 63.92 11.6596 64.38 9.91963 64.85C8.10963 65.34 6.84963 64.77 6.04963 63.08C5.00963 60.88 3.98963 58.68 2.97963 56.47C2.28963 54.95 2.68963 53.48 4.05963 52.53C5.57963 51.48 7.11963 50.44 8.66963 49.42C9.80963 48.66 10.3296 47.64 10.2496 46.26C10.1496 44.6 10.1296 42.95 10.0696 41.29C10.0196 39.95 9.46963 38.9 8.27963 38.22C6.78963 37.38 5.29963 36.54 3.80963 35.69C2.00963 34.66 1.51963 33.3 2.23963 31.36C3.04963 29.16 3.86963 26.96 4.68963 24.76C5.31963 23.07 6.54963 22.32 8.31963 22.62C10.1996 22.94 12.0696 23.3 13.9396 23.67C15.1096 23.9 16.0896 23.57 16.8796 22.74C18.2096 21.37 19.4996 19.97 20.7896 18.56C21.6596 17.62 21.9396 16.52 21.5796 15.26C21.0796 13.48 20.6196 11.69 20.1496 9.90004C19.7096 8.23004 20.2896 6.93004 21.8396 6.20004C24.0596 5.15004 26.2896 4.12004 28.5296 3.09004C30.0896 2.38004 31.5296 2.77004 32.5296 4.19004C33.5296 5.61004 34.5296 7.04004 35.4796 8.50004C36.3496 9.85004 37.5096 10.4 39.1296 10.22C40.6396 10.06 42.1696 10.04 43.6896 10.06C45.2896 10.08 46.4496 9.49004 47.2096 8.05004C47.9896 6.59004 48.8296 5.16004 49.6596 3.72004C50.6096 2.07004 52.0196 1.53004 53.7896 2.18004C56.0396 3.00004 58.2996 3.84004 60.5396 4.69004C62.0896 5.28004 62.8596 6.59004 62.5996 8.23004C62.3096 10 62.0096 11.77 61.6496 13.53C61.3696 14.91 61.7396 16.03 62.7896 16.96C63.8396 17.89 64.8696 18.84 66.0496 19.91" stroke="white" stroke-width="3.84" stroke-miterlimit="16"/>
                                <path d="M70.1401 37.49C65.5001 40.33 61.0201 43.41 57.8401 47.93C55.7801 50.86 54.5701 54.14 54.7501 57.8C54.8401 59.66 55.5301 61.33 56.7201 62.96" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M53.0801 65.05C56.9001 63.17 60.1901 59.91 60.1901 59.91" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M50.4501 53.07C48.9301 46.56 48.5101 42.68 49.0601 39.55C49.6501 36.17 51.5301 33.64 54.1201 31.54C56.5101 29.6 59.3801 28.67 62.2001 27.6C64.0001 26.92 65.8401 26.24 67.5001 25.3C70.6001 23.53 72.5201 20.72 73.8901 17.48C74.1101 16.95 74.5401 16.51 74.8701 16.03C75.2901 16.46 75.8601 16.82 76.1201 17.34C81.1901 27.3 80.9701 37.09 74.7601 46.48C72.2701 50.25 68.7401 52.85 64.1601 53.75C62.3101 54.11 60.0601 53.87 58.1401 53.12" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M46.0894 59.3901C44.7894 60.7701 43.1394 61.2301 41.3794 61.3201C37.9694 61.4901 34.8994 60.3301 32.2694 58.3201C27.1194 54.3901 24.3994 49.1701 24.7094 42.5601C24.7394 41.9601 24.8794 41.3501 25.0394 40.7701C25.2794 39.9201 25.8194 39.8001 26.4194 40.4601C26.7294 40.8101 26.9894 41.2101 27.2994 41.5601C30.1494 44.7101 33.6494 45.6801 37.7494 44.6701C39.3894 44.2701 41.0394 43.8901 42.7494 44.2801C46.3694 45.1001 49.5794 48.9601 50.4594 53.0701" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M57.9799 23.0501C54.3699 20.2101 50.2999 18.4801 45.7499 17.9501C38.6299 17.1101 32.2199 18.9101 26.7499 23.5401C20.1699 29.1101 17.2799 36.3101 17.9199 44.8901C18.7299 55.6401 27.3399 65.0601 37.9999 66.9501C42.9399 67.8301 47.7399 67.3501 52.3799 65.3801C52.6499 65.2601 52.9099 65.1301 53.0799 65.0501C51.2199 60.2401 48.2199 56.4801 43.6599 54.0601C40.7399 52.5101 37.7299 51.2801 34.3399 51.2601" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2627_14287">
                                    <rect width="85.1" height="85.11" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="name">{{ $t('esg.environment') }}</div>
                    </div>
                    <div class="po">
                        <div class="top">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2680_10317)">
                                    <circle cx="18" cy="18" r="18" fill="#3CC846"/>
                                    <path d="M24.75 13.6818C24.75 14.6864 23.9669 15.5 23 15.5C22.0331 15.5 21.25 14.6864 21.25 13.6818C21.25 12 23 10.5 23 10.5C23 10.5 24.75 12 24.75 13.6818Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M16.25 11.3182C16.25 12.5236 15.2431 13.5 14 13.5C12.7569 13.5 11.75 12.5236 11.75 11.3182C11.75 9.3 14 7.5 14 7.5C14 7.5 16.25 9.3 16.25 11.3182Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M18 29V24" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M18 25.0001C18 25.0001 18.5958 21.192 21.2631 19.652C23.9305 18.112 27.5263 19.5001 27.5263 19.5001C27.5263 19.5001 26.8829 23.3357 24.2631 24.8482C21.5958 26.3882 18 25.0001 18 25.0001Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M17.9999 25.0001C17.9999 25.0001 17.4041 21.192 14.7368 19.652C12.0694 18.112 8.47363 19.5001 8.47363 19.5001C8.47363 19.5001 9.11705 23.3357 11.7368 24.8482C14.4041 26.3882 17.9999 25.0001 17.9999 25.0001Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2680_10317">
                                        <rect width="36" height="36" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class=”t1”>{{ $t('esg.wastewaterTitle') }}</div>
                            <div class=”ab”>
                                <div><span>{{ $t('esg.wastewaterFacility') }}</span></div>
                                <div><span>{{ $t('esg.autoDosing') }}</span></div>
                                <div><span>{{ $t('esg.onlineMonitoring') }}</span></div>
                                <div><span>{{ $t('esg.nitrogenPhosphorusZero') }}</span></div>
                            </div>
                        </div>
                        <img src="/images/about/esg/2-1.jpg" alt="">
                    </div>
                    <div class="po">
                        <div class="top">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2680_10697)">
                                    <circle cx="18" cy="18" r="18" fill="#3CC846"/>
                                    <path d="M19.002 20.6373C20.069 22.1158 20.6495 22.4535 19.5852 24.9559C18.521 27.4583 21.4911 29.2825 24.4602 26.8855C25.301 26.2066 25.8424 25.2347 25.9714 24.1728C26.3351 21.1774 23.3864 19.5475 20.7517 19.0068" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                                    <path d="M17.002 15.3763C15.9349 13.8978 15.3545 13.5601 16.4187 11.0577C17.483 8.55535 14.5129 6.7311 11.5437 9.12815C10.7029 9.80697 10.1615 10.7789 10.0325 11.8408C9.66883 14.8362 12.6175 16.466 15.2522 17.0068" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                                    <path d="M15.3714 19.0068C13.8929 20.0738 13.5552 20.6543 11.0528 19.59C8.55047 18.5258 6.72622 21.4959 9.12326 24.465C9.80208 25.3058 10.774 25.8472 11.8359 25.9762C14.8313 26.3399 16.4612 23.3912 17.002 20.7565" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                                    <path d="M20.6326 17.0069C22.1111 15.9398 22.4488 15.3593 24.9511 16.4236C27.4535 17.4879 29.2778 14.5177 26.8807 11.5486C26.2019 10.7078 25.23 10.1664 24.168 10.0374C21.1727 9.67371 19.5428 12.6224 19.002 15.2571" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                                    <path d="M18.002 21.0069C19.6588 21.0069 21.002 19.6637 21.002 18.0069C21.002 16.35 19.6588 15.0068 18.002 15.0068C16.3451 15.0068 15.002 16.35 15.002 18.0069C15.002 19.6637 16.3451 21.0069 18.002 21.0069Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2680_10697">
                                        <rect width="36" height="36" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class="t1">{{ $t('esg.gasEmissionTitle') }}</div>
                            <div class="ab">
                                <div><span>{{ $t('esg.gasOrganizedEmission') }}</span></div>
                                <div><span>{{ $t('esg.gasControlSystem') }}</span></div>
                            </div>
                        </div>
                        <img src="/images/about/esg/2-2.jpg" alt="">
                    </div>
                </div>
                <div class="pla lblue">
                    <div class="cate">
                        <svg width="86" height="91" viewBox="0 0 86 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2627_14297)">
                                <path d="M62.8604 83.6399C65.9404 81.8599 68.7803 79.6899 71.2803 77.1899" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M77.7402 68.77C79.5002 65.73 80.8802 62.45 81.8102 58.97" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M42.5498 89.08C46.1898 89.08 49.7098 88.59 53.0698 87.7" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M22.2402 83.64C25.2802 85.4 28.5602 86.78 32.0402 87.71" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M7.37012 68.77C9.15012 71.85 11.3201 74.69 13.8201 77.19" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M83.1798 48.4499C83.1798 44.8099 82.6898 41.2899 81.7998 37.9299" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M77.74 28.14C75.96 25.06 73.79 22.22 71.29 19.72" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M3.29992 58.9699C2.39992 55.6099 1.91992 52.0899 1.91992 48.4499C1.91992 26.0099 20.1099 7.81995 42.5499 7.81995H58.5899" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M52.1299 14.28L58.5899 7.81999L52.1299 1.35999" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M56.3098 31.46H28.7998V70.11H56.3098V31.46Z" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M48.8395 27.16H36.2695V31.46H48.8395V27.16Z" fill="white" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M35.2002 59.8199H49.9102" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                                <path d="M35.2002 49.8H49.9102" stroke="white" stroke-width="3.84" stroke-miterlimit="10"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2627_14297">
                                    <rect width="85.1" height="91" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="name">{{ $t('esg.energySaving') }}</div>
                    </div>
                    <div class="po">
                        <div class="top">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2680_5935)">
                                    <circle cx="18" cy="18" r="18" fill="#4696FF"/>
                                    <path d="M18 9V27" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M25 9H11C9.89543 9 9 9.89543 9 11V25C9 26.1046 9.89543 27 11 27H25C26.1046 27 27 26.1046 27 25V11C27 9.89543 26.1046 9 25 9Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M13 13H14" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M13 21H14" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M13 17H14" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M22 13H23" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M22 21H23" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    <path d="M22 17H23" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2680_5935">
                                        <rect width="36" height="36" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class="t1">{{ $t('esg.highEfficiencyTitle') }}</div>
                            <div class="ab">
                                <div><span>{{ $t('esg.highEfficiencyFeature') }}</span></div>
                                <div><span>{{ $t('esg.copRating') }}</span></div>
                                <div><span>{{ $t('esg.provinceFirst') }}</span></div>
                            </div>
                        </div>
                        <img src="/images/about/esg/3-1.jpg" alt="">
                    </div>
                    <div class="po">
                        <div class="top">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2680_5899)">
                                    <circle cx="18" cy="18" r="18" fill="#4696FF"/>
                                    <g clip-path="url(#clip1_2680_5899)">
                                        <path d="M25.7783 25.7782C30.074 21.4824 30.074 14.5176 25.7783 10.2218" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                        <path d="M22.9492 22.9496C25.6829 20.216 25.6829 15.7838 22.9492 13.0502" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                        <path d="M18.5 13.5L16 18H18H20L17.5 22.5" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                        <path d="M13.0503 22.9496C10.3166 20.216 10.3166 15.7838 13.0503 13.0502" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                        <path d="M10.2218 25.7782C5.92606 21.4824 5.92606 14.5176 10.2218 10.2218" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2680_5899">
                                        <rect width="36" height="36" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1_2680_5899">
                                        <rect width="24" height="24" fill="white" transform="translate(6 6)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <div class="t1">{{ $t('esg.energyRecoveryTitle') }}</div>
                            <div class="ab">
                                <div><span>{{ $t('esg.gasBoilerReplacement') }}</span></div>
                                <div><span>{{ $t('esg.heatRecoverySystem') }}</span></div>
                            </div>
                        </div>
                        <img src="/images/about/esg/3-2.jpg" alt="">
                    </div>
                </div>
            </div>

            <div class="wrap" v-if="esgReport">
                <div class="report-card">
                    <div class="card-img">
                        <img src="/images/about/esg/esg-img.jpg" alt="ESG报告">
                    </div>
                    <div class="card-info">
                        <div class="tag">ESG Report</div>
                        <div class="title">{{ esgReport.title }}</div>
                        <div class="year">{{ esgReport.year }}</div>
                        <a
                            v-if="esgReport.url"
                            :href="esgReport.url"
                            target="_blank"
                            class="dl-btn"
                            download
                        >
                            <i class="ri-download-2-line"></i>
                            {{ $t('esg.downloadReport') }}
                        </a>
                        <div class="dl-btn disabled" v-else>
                            <i class="ri-time-line"></i>
                            {{ $t('esg.reportPreparing') }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const { t } = useI18n()
const breadcrumb = computed(() => [
    { name: t('nav.about'), link: '/about' },
    { name: 'ESG', link: '' }
])
const esgReport = computed(() => appConfig.clientConfig?.esgReport || null)
</script>

<style scoped lang="scss">
.s1 {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    padding: fluid(100px) 0;
    .wrap {
        display: flex;
        flex-flow: column nowrap;
        gap: fluid(64px);
        max-width: min(1120px, 90vw);
    }
    .pla.blue {
        color: var(--main-blue)
    }
    .pla.green {
        color: #3CC846
    }
    .pla.lblue {
        color: #4696FF
    }
    .pla {
        height: fluid(490px);
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: stretch;
        gap: 16px;
        @include mo {
            height: auto;
            flex-direction: column;
        }
        .cate {
            width: 150px;
            flex: none;
            @include mo {
                width: 100%;
                height: 60px;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 0 20px;
                gap: 16px;
                svg { margin-top: 0; }
                .name { font-size: 18px; }
            }
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            overflow: hidden;
            gap: fluid(27px);
            background: linear-gradient(180deg, currentColor 0%, rgba(30, 50, 150, 0.30) 100%);
            svg {
                margin-top: fluid(32px);
            }
            .name {
                font-size: fluid(24px, 18px);
                color: white;
            }
        }
        .po {
            width: 100%;
            flex: auto;
            padding: 32px 24px;
            position: relative;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            border-top: 1px solid currentColor;
            background: #F8F8F8;
            .top {
                display: flex;
                flex-flow: column nowrap;
                gap: 12px;
            }
            .t1 {
                color: var(--main-black, #000);
                font-size: fluid(20px);
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .ab {
                leading-trim: both;
                text-edge: cap;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 24px */
                > div {
                    text-indent: 1em;
                    position: relative;
                    text-indent: 1em;
                    span {
                        color: var(--main-dark-gray);
                    }
                    &:after {
                        content: '●';
                        display: block;
                        position: absolute;
                        font-size: 8px;
                        left: -15px;
                        top: 0px;
                        color: currentColor;
                    }
                }
            }
            img {
                width: 100%;
                height: auto;
            }
        }
    }
    .report-card {
        margin-top: fluid(64px);
        display: flex;
        flex-flow: row nowrap;
        align-items: stretch;
        max-width: 100%;
        border-top: 1px solid var(--main-orange);
        background: #fff;
        overflow: hidden;
        @include mo {
            flex-direction: column;
        }
        .card-img {
            width: 480px;
            height: fluid(280px);
            flex: none;
            @include mo {
                width: 100%;
                height: 200px;
            }
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
        }
        .card-info {
            flex: auto;
            padding: 0 fluid(48px);
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            gap: 16px;
            .tag {
                display: inline-block;
                padding: 4px 14px;
                background: var(--main-blue);
                color: #fff;
                font-size: 12px;
                font-family: 'SpaceGrotesk', sans-serif;
                letter-spacing: 0.08em;
                align-self: flex-start;
            }
            .title {
                font-size: fluid(24px);
                font-weight: 700;
                color: #000;
                line-height: 1.3;
            }
            .year {
                font-size: fluid(48px);
                font-weight: 800;
                font-family: 'SpaceGrotesk', sans-serif;
                color: #F0F0F0;
                line-height: 1;
                margin-top: -8px;
            }
            .dl-btn {
                margin-top: 8px;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                align-self: flex-start;
                padding: 12px 28px;
                background: var(--main-orange);
                color: #fff;
                font-size: 15px;
                font-weight: 600;
                text-decoration: none;
                transition: background .2s, transform .2s;
                cursor: pointer;
                &:hover {
                    background: darken(#FF7B00, 8%);
                    transform: translateY(-2px);
                }
                &.disabled {
                    background: var(--main-light-gray);
                    color: var(--main-dark-gray);
                    cursor: default;
                    &:hover { transform: none; }
                }
                i { font-size: 18px; }
            }
        }
    }
}
</style>

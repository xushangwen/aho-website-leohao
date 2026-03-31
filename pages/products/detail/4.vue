<template>
    <LayoutsDefault>
        <template v-slot:content>
            <EleProdCover
                image="/images/prod/detail/cover/1.jpg"
                image-mobile="/images/prod/detail/cover/1m.jpg"
                text="工业物联"
            ></EleProdCover>
            <EleBreadcrumb
                class="breadcrumb"
                :navigate="navi"
            ></EleBreadcrumb>

            <section class="s1">
                <div class="wrap">
                    <div class="la">产品特征</div>
                    <div class="list row prd-feat-list">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)" fill-opacity="0.3"/>
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75" stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1" stroke-width="0.5"/>
                                            <rect x="8" y="8" width="112" height="112" rx="56" fill="url(#paint2_linear_334_10233)"/>
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white" stroke-width="2"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="#29ABE2"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2"/>
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64" y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.4 48.3261L20.8267 37.8727L28.3467 45.3927L40.5333 33.1794L45.3067 37.9528V24.6194H31.9733L36.7467 29.3927L28.32 37.7927L20.7733 30.2461L7.57333 43.4194C6.08 40.0861 5.25333 36.4327 5.25333 32.5661C5.25333 17.8194 17.1733 5.89941 31.92 5.89941C46.64 5.89941 58.5867 17.8194 58.5867 32.5394C58.5867 47.2594 46.64 59.2061 31.92 59.2061C23.0133 59.2061 15.1467 54.8327 10.2933 48.1661L10.4 48.3261Z" fill="url(#paint0_linear_334_4333)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4333" x1="14.4598" y1="10.0862" x2="54.3043" y2="67.2252" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2"/>
                                                <stop offset="1" stop-color="#196BB6"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">01</div>
                                </div>
                                <div class="l">
                                    <svg  class="hori" xmlns="http://www.w3.org/2000/svg" width="376" height="1" viewBox="0 0 376 1"
                                        fill="none">
                                        <path d="M0 0.699219H376" stroke="url(#paint0_linear_334_4337)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4337" x1="389.157" y1="0.699219"
                                                x2="0" y2="0.699219" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg class="vertical" width="2" height="98" viewBox="0 0 2 98" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 97.6843V0.184326" stroke="url(#paint0_linear_104_23)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_104_23" x1="1" y1="-3.22751" x2="1"
                                                y2="97.6843" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="info">
                                    <div class="t1">能耗</div>
                                    <div class="ab">实时记录设备生产的时、班、日、周、月用电量，减少人工统计</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)" fill-opacity="0.3"/>
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75" stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1" stroke-width="0.5"/>
                                            <rect x="8" y="8" width="112" height="112" rx="56" fill="url(#paint2_linear_334_10233)"/>
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white" stroke-width="2"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="#29ABE2"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2"/>
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64" y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 6.03271C46.72 6.03271 58.6667 17.9527 58.6667 32.6994C58.6667 47.4194 46.72 59.366 32 59.366C17.2533 59.366 5.33334 47.4194 5.33334 32.6994C5.33334 17.9527 17.2533 6.03271 32 6.03271ZM32 14.0327C21.68 14.0327 13.3333 22.3794 13.3333 32.6994C13.3333 37.6327 15.2267 42.1127 18.3733 45.4461L18.7733 45.8727L22.5333 42.0861C20.1067 39.6594 18.6133 36.326 18.6133 32.646C18.6133 25.2594 24.56 19.3127 31.9467 19.3127C33.12 19.3127 34.2933 19.446 35.3867 19.7394L39.5467 15.5527C37.2 14.486 34.64 13.926 31.92 13.926L32 14.0327ZM49.04 25.0727L44.8533 29.2327C45.1467 30.326 45.28 31.4727 45.28 32.6727C45.28 36.3527 43.7867 39.6861 41.36 42.0861L45.12 45.8461C48.48 42.4594 50.5867 37.7927 50.5867 32.646C50.5867 29.926 50 27.3394 48.96 25.0194L49.04 25.0727ZM43.3067 17.606L33.36 27.526C32.9067 27.3927 32.4533 27.3394 31.9733 27.3394C29.0133 27.3394 26.64 29.7127 26.64 32.6727C26.64 35.606 29.0133 38.006 31.9733 38.006C34.9067 38.006 37.3067 35.606 37.3067 32.6727C37.3067 32.1927 37.2267 31.7127 37.12 31.286L47.04 21.3394L43.2533 17.5527L43.3067 17.606Z" fill="url(#paint0_linear_334_5300)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_334_5300" x1="14.5398" y1="10.2216" x2="54.4111" y2="67.3705" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2"/>
                                                <stop offset="1" stop-color="#196BB6"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">02</div>
                                </div>
                                <div class="l">
                                    <svg  class="hori" xmlns="http://www.w3.org/2000/svg" width="376" height="1" viewBox="0 0 376 1"
                                        fill="none">
                                        <path d="M0 0.699219H376" stroke="url(#paint0_linear_334_4337)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4337" x1="389.157" y1="0.699219"
                                                x2="0" y2="0.699219" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg class="vertical" width="2" height="98" viewBox="0 0 2 98" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 97.6843V0.184326" stroke="url(#paint0_linear_104_23)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_104_23" x1="1" y1="-3.22751" x2="1"
                                                y2="97.6843" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="info">
                                    <div class="t1">实时运行状态</div>
                                    <div class="ab">实时采集设备待机、正常运行、高负荷运行状态，形成运行时序图</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)" fill-opacity="0.3"/>
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75" stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1" stroke-width="0.5"/>
                                            <rect x="8" y="8" width="112" height="112" rx="56" fill="url(#paint2_linear_334_10233)"/>
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white" stroke-width="2"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="#29ABE2"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2"/>
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64" y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.4533 13.8191L14.2133 17.5791C10.3467 21.4191 7.94667 26.7524 7.94667 32.6457C7.94667 38.5124 10.32 43.8457 14.1867 47.7124L10.4 51.4724C5.57334 46.6457 2.58667 39.9791 2.58667 32.5924C2.58667 25.2057 5.54667 18.5391 10.3733 13.7124L10.4533 13.8191ZM53.4933 13.8191C58.2933 18.6191 61.28 25.2857 61.28 32.6724C61.28 40.0324 58.2933 46.6991 53.4667 51.5257L49.68 47.7391C53.52 43.8724 55.92 38.5391 55.92 32.6457C55.92 26.7524 53.52 21.4191 49.6533 17.5524L53.4133 13.7657L53.4933 13.8191ZM34.6133 14.0057V30.0057H42.6133L29.28 51.3391V35.3391H21.28L34.6133 13.9791V14.0057ZM17.9467 21.3391L21.7067 25.0991C19.76 27.0191 18.56 29.6857 18.56 32.6191C18.56 35.5524 19.7333 38.2191 21.68 40.1391L17.8933 43.8991C14.9867 40.9924 13.2 36.9924 13.2 32.5657C13.2 28.1391 14.9867 24.1391 17.8667 21.2324L17.9467 21.3391ZM45.8933 21.3391C48.7733 24.2191 50.56 28.2191 50.56 32.6457C50.56 37.0457 48.7467 41.0457 45.8667 43.9524L42.08 40.1657C44 38.2191 45.2 35.5524 45.2 32.6191C45.2 29.6591 44 26.9924 42.0533 25.0724L45.8133 21.2857L45.8933 21.3391Z" fill="url(#paint0_linear_334_4436)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4436" x1="12.7183" y1="16.6823" x2="35.2444" y2="66.7983" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2"/>
                                                <stop offset="1" stop-color="#196BB6"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">03</div>
                                </div>
                                <div class="l">
                                    <svg  class="hori" xmlns="http://www.w3.org/2000/svg" width="376" height="1" viewBox="0 0 376 1"
                                        fill="none">
                                        <path d="M0 0.699219H376" stroke="url(#paint0_linear_334_4337)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4337" x1="389.157" y1="0.699219"
                                                x2="0" y2="0.699219" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg class="vertical" width="2" height="98" viewBox="0 0 2 98" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 97.6843V0.184326" stroke="url(#paint0_linear_104_23)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_104_23" x1="1" y1="-3.22751" x2="1"
                                                y2="97.6843" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="info">
                                    <div class="t1">电压</div>
                                    <div class="ab">记录设备运行电压，用于异常提醒</div>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)" fill-opacity="0.3"/>
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75" stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1" stroke-width="0.5"/>
                                            <rect x="8" y="8" width="112" height="112" rx="56" fill="url(#paint2_linear_334_10233)"/>
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white" stroke-width="2"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="#29ABE2"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2"/>
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64" y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 30.0327V14.0327L18.6667 35.366H26.6667V51.366L40 30.0327H32ZM8 14.0327H50.6667C52.1333 14.0327 53.3333 15.206 53.3333 16.6994V48.6994C53.3333 50.166 52.1333 51.366 50.6667 51.366H8C6.50667 51.366 5.33334 50.166 5.33334 48.6994V16.6994C5.33334 15.206 6.50667 14.0327 8 14.0327ZM56 24.6994H61.3333V40.6994H56V24.6994Z" fill="url(#paint0_linear_334_4446)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4446" x1="15.0001" y1="16.9649" x2="37.7434" y2="65.863" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2"/>
                                                <stop offset="1" stop-color="#196BB6"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">04</div>
                                </div>
                                <div class="l">
                                    <svg  class="hori" xmlns="http://www.w3.org/2000/svg" width="376" height="1" viewBox="0 0 376 1"
                                        fill="none">
                                        <path d="M0 0.699219H376" stroke="url(#paint0_linear_334_4337)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4337" x1="389.157" y1="0.699219"
                                                x2="0" y2="0.699219" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg class="vertical" width="2" height="98" viewBox="0 0 2 98" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 97.6843V0.184326" stroke="url(#paint0_linear_104_23)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_104_23" x1="1" y1="-3.22751" x2="1"
                                                y2="97.6843" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="info">
                                    <div class="t1">电流</div>
                                    <div class="ab">记录设备运行电流，用于异常提醒</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)" fill-opacity="0.3"/>
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75" stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1" stroke-width="0.5"/>
                                            <rect x="8" y="8" width="112" height="112" rx="56" fill="url(#paint2_linear_334_10233)"/>
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white" stroke-width="2"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="#29ABE2"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2"/>
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64" y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3333 15.819L17.0133 21.499C14.6667 24.5923 13.28 28.459 13.28 32.6723C13.28 42.9657 21.6267 51.339 31.9467 51.339C42.24 51.339 50.6133 42.9657 50.6133 32.6723C50.6133 22.3523 42.24 14.0057 31.9467 14.0057C27.7333 14.0057 23.8667 15.3657 20.7467 17.7123L15.04 12.0057C19.6267 8.219 25.4933 5.979 31.8933 5.979C46.6133 5.979 58.56 17.899 58.56 32.6457C58.56 47.3657 46.6133 59.3123 31.8933 59.3123C17.1467 59.3123 5.22665 47.3657 5.22665 32.6457C5.22665 26.219 7.46665 20.3523 11.2267 15.7657L11.3333 15.819ZM20.8533 25.339L31.9733 36.459L35.7333 32.6723L24.5867 21.5257C26.6933 20.1123 29.2 19.3123 31.92 19.3123C39.28 19.3123 45.2533 25.259 45.2533 32.6457C45.2533 40.0057 39.28 45.979 31.92 45.979C24.5333 45.979 18.5867 40.0057 18.5867 32.6457C18.5867 29.9257 19.3867 27.3923 20.7733 25.2857L20.8533 25.339Z" fill="url(#paint0_linear_334_5257)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_334_5257" x1="14.4331" y1="10.1679" x2="54.3044" y2="67.3168" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2"/>
                                                <stop offset="1" stop-color="#196BB6"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">05</div>
                                </div>
                                <div class="l">
                                    <svg  class="hori" xmlns="http://www.w3.org/2000/svg" width="376" height="1" viewBox="0 0 376 1"
                                        fill="none">
                                        <path d="M0 0.699219H376" stroke="url(#paint0_linear_334_4337)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4337" x1="389.157" y1="0.699219"
                                                x2="0" y2="0.699219" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg class="vertical" width="2" height="98" viewBox="0 0 2 98" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 97.6843V0.184326" stroke="url(#paint0_linear_104_23)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_104_23" x1="1" y1="-3.22751" x2="1"
                                                y2="97.6843" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="info">
                                    <div class="t1">有功功率</div>
                                    <div class="ab">实时显示当前实际消耗的电功率</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)" fill-opacity="0.3"/>
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75" stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1" stroke-width="0.5"/>
                                            <rect x="8" y="8" width="112" height="112" rx="56" fill="url(#paint2_linear_334_10233)"/>
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white" stroke-width="2"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="#29ABE2"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2"/>
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64" y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M56 8.69922C57.4666 8.69922 58.6666 9.87255 58.6666 11.3659V48.6992C58.6666 50.1659 57.4666 51.3659 56 51.3659H17.2133L5.33331 60.6992V11.3659C5.33331 9.87255 6.50665 8.69922 7.99998 8.69922H56ZM34.6666 19.3659H29.3333V40.6992H34.6666V19.3659ZM45.3333 24.6992H40V40.6992H45.3333V24.6992ZM24 30.0326H18.6666V40.6992H24V30.0326Z" fill="url(#paint0_linear_334_3485)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_334_3485" x1="14.5397" y1="12.7834" x2="53.0652" y2="69.4191" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2"/>
                                                <stop offset="1" stop-color="#196BB6"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">06</div>
                                </div>
                                <div class="l">
                                    <svg  class="hori" xmlns="http://www.w3.org/2000/svg" width="376" height="1" viewBox="0 0 376 1"
                                        fill="none">
                                        <path d="M0 0.699219H376" stroke="url(#paint0_linear_334_4337)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4337" x1="389.157" y1="0.699219"
                                                x2="0" y2="0.699219" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg class="vertical" width="2" height="98" viewBox="0 0 2 98" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 97.6843V0.184326" stroke="url(#paint0_linear_104_23)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_104_23" x1="1" y1="-3.22751" x2="1"
                                                y2="97.6843" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="info">
                                    <div class="t1">功率因素</div>
                                    <div class="ab">反应当前设备电能的利用效率</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)" fill-opacity="0.3"/>
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75" stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1" stroke-width="0.5"/>
                                            <rect x="8" y="8" width="112" height="112" rx="56" fill="url(#paint2_linear_334_10233)"/>
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white" stroke-width="2"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="#29ABE2"/>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2"/>
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0"/>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64" y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0"/>
                                                    <stop offset="1" stop-color="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 35.3657L48 59.3657H16L32 35.3657ZM29.1467 28.8591C27.5734 27.2857 27.5734 24.7524 29.1467 23.1791C30.6934 21.6057 33.2267 21.6057 34.8 23.1791C36.3467 24.7257 36.3467 27.2591 34.8 28.8324C33.2267 30.3791 30.6934 30.3791 29.12 28.8324L29.1467 28.8591ZM14.0534 8.11242L17.8134 11.8724C10 19.6591 10 32.3257 17.8134 40.1391L14.0267 43.8991C4.13336 34.0057 4.13336 17.9524 14.0267 8.05908L14.0534 8.11242ZM49.8667 8.11242C59.76 17.9791 59.76 34.0324 49.8667 43.9257L46.08 40.1391C53.8667 32.3257 53.8667 19.6591 46.08 11.8457L49.84 8.05908L49.8667 8.11242ZM21.5734 15.6324L25.3334 19.3924C21.68 23.0191 21.68 28.9391 25.3334 32.5657L21.5467 36.3257C15.8134 30.5924 15.8134 21.2857 21.5467 15.5791L21.5734 15.6324ZM42.2934 15.6324C48 21.3391 48 30.6457 42.2934 36.3524L38.5067 32.5657C42.1334 28.9124 42.1334 22.9924 38.5067 19.3657L42.2667 15.5791L42.2934 15.6324Z" fill="url(#paint0_linear_334_6908)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_334_6908" x1="15.3551" y1="12.0888" x2="53.8718" y2="66.6218" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2"/>
                                                <stop offset="1" stop-color="#196BB6"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">07</div>
                                </div>
                                <div class="l">
                                    <svg  class="hori" xmlns="http://www.w3.org/2000/svg" width="376" height="1" viewBox="0 0 376 1"
                                        fill="none">
                                        <path d="M0 0.699219H376" stroke="url(#paint0_linear_334_4337)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4337" x1="389.157" y1="0.699219"
                                                x2="0" y2="0.699219" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg class="vertical" width="2" height="98" viewBox="0 0 2 98" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 97.6843V0.184326" stroke="url(#paint0_linear_104_23)"
                                            stroke-width="0.5" />
                                        <defs>
                                            <linearGradient id="paint0_linear_104_23" x1="1" y1="-3.22751" x2="1"
                                                y2="97.6843" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" stop-opacity="0" />
                                                <stop offset="0.495592" stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="info">
                                    <div class="t1">电压频率</div>
                                    <div class="ab">检测电网供电电压质量</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <NuxtLink class="" to="/products">
                        <div class="back _btn sm">
                            <div class="_str">回到产品列表</div>
                            <div class="_icon ri-arrow-go-back-line"></div>
                        </div>
                    </NuxtLink>
                </div>
            </section>

            <EleProductConsult/>


        </template>
    </LayoutsDefault>
</template>

<script setup>
    import { productsCate1} from "@/mock/products";
    const appConfig = useAppConfig()
    const runtimeConfig = useRuntimeConfig()
    const navi = ref([
        {
            name: '产品',
            link: '/products'
        },
        {
            name: '工业物联',
            link: ''
        }
    ])
    const bannerSlides = ref(appConfig.clientConfig.productBanner)
    const route = useRoute()
    const uuid = route.params.uuid
    const cateDetail = ref({})
    const detail = ref({})
    const cover = ref([])
    const router = useRouter()
    console.log(router.hasRoute('product'))


    onMounted(() => {

    })
</script>

<style scoped lang="scss">
.s1,
.s2 {
    padding: 80px 0;
    .wrap {
        & > .la {
            color: var(--main-black, #0F171F);
            font-size: 30px;
            font-weight: 700;
            line-height: 150%; /* 45px */
        }
        .list {
            margin-top: 48px;
            @include lap {
                margin-top: 32px;
            }
        }
    }
}
.s1 {
    .wrap {
        .back {
            margin-top: 44px;
        }
    }
}
.s2 {
    .wrap {
        .list {
            --bs-gutter-x: 32px;
            .item {
                @include flex-c();
                height: 100%;
                transition: all .3s;
                &:hover {
                    box-shadow: 0 15px 20px -3px lighten($BC, 50%);
                    .info {
                        .num {
                            color: var(--main-blue);
                        }
                    }
                }
            }
            .cover {
                background-color: #F1F1F1;
                @include flex-c();
                @include flex-center;
                height: 100%;
                svg {
                    width: 124px;
                    height: auto;
                    @include lap {
                        width: 90px;
                    }
                    @include mo {
                        width: 70px;
                    }
                }
            }
            .info {
                padding: 16px 20px 20px;
                border-bottom: 2px solid var(--main-blue, #196BB6);
                position: relative;
                overflow: hidden;
                flex: auto;
                .num {
                    color: #E5E5E5;
                    text-align: right;
                    leading-trim: both;
                    text-edge: cap;
                    font-size: 60px;
                    font-weight: 700;
                    position: absolute;
                    top: 16px;
                    right: 20px;
                    transition: all .3s;
                }
                .t {
                    color: var(--main-blue, #196BB6);
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin-top: 80px;
                }
                .ab {
                    color: #6B6B6B;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 130%; /* 20.8px */
                    text-transform: uppercase;
                }
            }
        }
        .back {
            margin-top: 100px;
            @include lap {
                margin-top: 70px;
            }
            @include mo {
                margin-top: 40px;
            }
        }
    }
}


@include mo {
    .breadcrumb {
        background-color: white;
    }
    .s1 {
        background-color: #f8f8f8;
        padding: 64px 0;
        .wrap {
            &>.la {
                font-size: 24px;
            }
            .list {
                margin-top: 32px;
            }
        }
    }
}
</style>


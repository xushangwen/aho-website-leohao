<template>
    <LayoutsDefault>
        <template v-slot:content>
            <EleProdCover
                image="/images/prod/detail/cover/2.jpg"
                image-mobile="/images/prod/detail/cover/2m.jpg"
                text="智能温控"></EleProdCover>
            <EleBreadcrumb class="breadcrumb" :navigate="navi"></EleBreadcrumb>

            <section class="s1">
                <div class="wrap">
                    <div class="la">产品特征</div>
                    <div class="list row prd-feat-list">
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.3333 8.19938H40V1.53271L49.3333 10.866L40 20.1994V13.5327H21.3333V20.1994L12 10.866L21.3333 1.53271V8.19938ZM8 45.5327V17.5327H13.3333V45.5327C13.3333 48.466 15.7067 50.866 18.6667 50.866H46.6667V56.1994H18.6667C12.7733 56.1994 8 51.3994 8 45.5327ZM56 42.866V24.1994H62.6667L53.3333 14.866L44 24.1994H50.6667V42.866H44L53.3333 52.1994L62.6667 42.866H56Z"
                                            fill="url(#paint0_linear_334_5280)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_5280" x1="17.4366" y1="5.82631"
                                                x2="58.3047" y2="64.404" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
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
                                    <div class="ab">DIN多种标准尺寸
                                        (W48*H48, W48*H96, W 72*H72, W96*H48, W96*H96 mm)</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.44005 34.8393H20.0267C20.4801 43.5326 23.3067 51.6393 27.8134 58.5193C15.8934 56.6527 6.58672 46.9193 5.38672 34.8126L5.44005 34.8393ZM5.44005 29.506C6.64005 17.3726 15.9201 7.66598 27.8401 5.79932C23.3067 12.6526 20.5067 20.7593 20.0267 29.4793H5.41339L5.44005 29.506ZM58.5067 29.506H43.8934C43.4134 20.786 40.5867 12.6793 36.0801 5.79932C47.9734 7.63932 57.2801 17.3726 58.4801 29.4793L58.5067 29.506ZM58.5067 34.8393C57.2801 46.946 48.0001 56.6527 36.0801 58.5193C40.5867 51.6393 43.3867 43.5326 43.8667 34.8126H58.4534L58.5067 34.8393ZM25.3867 34.8393H38.5334C38.0534 42.2526 35.7067 49.1593 31.9467 55.0793C28.1601 49.1593 25.8134 42.2526 25.3601 34.8126L25.3867 34.8393ZM25.3867 29.506C25.8401 22.066 28.1867 15.1593 31.9467 9.23932C35.7067 15.1327 38.0534 22.0393 38.5067 29.4793H25.3334L25.3867 29.506Z"
                                            fill="url(#paint0_linear_334_3505)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_3505" x1="14.5563" y1="9.94001"
                                                x2="53.8655" y2="66.7106" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
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
                                    <div class="ab">85-265V 全球通用工作电源</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M40 13.5323H45.3333C48.2667 13.5323 50.6667 15.9057 50.6667 18.8657V40.6523C53.76 41.7457 56 44.7057 56 48.1723C56 52.5723 52.4 56.1723 48 56.1723C43.5733 56.1723 40 52.5723 40 48.1723C40 44.679 42.2133 41.719 45.3333 40.6257V18.8123H40V26.8123L28 16.1457L40 5.479V13.479V13.5323ZM13.3333 23.719C10.2133 22.599 8 19.639 8 16.1723C8 11.7457 11.5733 8.17234 16 8.17234C20.4 8.17234 24 11.7457 24 16.1723C24 19.639 21.76 22.599 18.6667 23.6923V40.599C21.76 41.6923 24 44.6523 24 48.119C24 52.519 20.4 56.119 16 56.119C11.5733 56.119 8 52.519 8 48.119C8 44.6257 10.2133 41.6657 13.3333 40.5723V23.639V23.719Z"
                                            fill="url(#paint0_linear_334_7734)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_7734" x1="16.2858" y1="9.46053"
                                                x2="54.8532" y2="61.8035" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
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
                                    <div class="ab">支持多种信号输入，热电偶、热电阻、模拟量输入切换
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M29.3333 37.5325V29.5325H34.6667V37.5325H48C49.4667 37.5325 50.6667 38.7059 50.6667 40.1992V56.1992C50.6667 57.6659 49.4667 58.8659 48 58.8659H16C14.5067 58.8659 13.3333 57.6659 13.3333 56.1992V40.1992C13.3333 38.7059 14.5067 37.5325 16 37.5325H29.3067H29.3333ZM6.69334 23.7459C10.2133 13.1325 20.2133 5.50586 31.9733 5.50586C43.7333 5.50586 53.7333 13.1325 57.2533 23.7192L52.1867 25.3992C49.36 16.9192 41.36 10.8125 31.92 10.8125C22.48 10.8125 14.48 16.9192 11.6533 25.3725L6.58667 23.6659L6.69334 23.7459ZM16.8 27.1059C18.9067 20.7325 24.9067 16.1459 31.9733 16.1459C39.04 16.1459 45.0133 20.7059 47.1467 27.0792L42.08 28.7592C40.6667 24.5192 36.6667 21.4525 31.9467 21.4525C27.2267 21.4525 23.2267 24.4925 21.8133 28.7325L16.7467 27.0259L16.8 27.1059Z"
                                            fill="url(#paint0_linear_334_6107)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_6107" x1="15.3328" y1="9.69682"
                                                x2="55.8952" y2="64.9017" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
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
                                    <div class="ab">支持多种信号输出，继电器，固态，移相触发，过零触发，直接驱动等</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.3333 13.5324C21.3333 7.63906 26.1066 2.86572 31.9999 2.86572C37.8666 2.86572 42.6666 7.63906 42.6666 13.5324V27.5324C47.4933 30.8924 50.6666 36.4924 50.6666 42.8391C50.6666 53.1324 42.2933 61.5057 31.9999 61.5057C21.6799 61.5057 13.3333 53.1324 13.3333 42.8391C13.3333 36.4924 16.4799 30.8657 21.3333 27.5057V13.4791V13.5324ZM24.3733 31.9057C20.7999 34.3857 18.6399 38.4124 18.6399 42.8391C18.6399 50.1991 24.5866 56.1724 31.9733 56.1724C39.3333 56.1724 45.3066 50.1991 45.3066 42.8391C45.3066 38.4124 43.1466 34.3591 39.5733 31.8791L37.2799 30.2791V13.4791C37.2799 10.5191 34.8799 8.14572 31.9466 8.14572C28.9866 8.14572 26.6133 10.5191 26.6133 13.4791V30.2524L24.3199 31.8257L24.3733 31.9057ZM29.3066 32.5191V13.5057H34.6399V32.4924C39.2266 33.6657 42.6399 37.8524 42.6399 42.8124C42.6399 48.6791 37.8399 53.4791 31.9733 53.4791C26.0799 53.4791 21.3066 48.6791 21.3066 42.8124C21.3066 37.8257 24.6933 33.6657 29.3066 32.4657V32.5191ZM31.9733 48.1724C34.9066 48.1724 37.3066 45.7724 37.3066 42.8391C37.3066 39.8791 34.9066 37.5057 31.9733 37.5057C29.0133 37.5057 26.6399 39.8791 26.6399 42.8391C26.6399 45.7724 29.0133 48.1724 31.9733 48.1724Z"
                                            fill="url(#paint0_linear_334_4404)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4404" x1="19.7778" y1="7.47139"
                                                x2="66.2929" y2="49.9182" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
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
                                    <div class="ab">支持华氏度/摄氏度温度单位切换
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M31.9999 58.866C17.2533 58.866 5.33325 46.9194 5.33325 32.1994C5.33325 17.4527 17.2533 5.53271 31.9999 5.53271C46.7199 5.53271 58.6666 17.4527 58.6666 32.1994C58.6666 46.9194 46.7199 58.866 31.9999 58.866ZM44.8533 45.7194C48.4266 42.306 50.6399 37.506 50.6399 32.1727C50.6399 21.8527 42.2666 13.506 31.9733 13.506C29.1199 13.506 26.4533 14.1194 24.0533 15.2394L26.6399 19.906C28.2666 19.186 30.0533 18.786 31.9466 18.786C39.3066 18.786 45.2799 24.7327 45.2799 32.1194H37.2799L44.7999 45.6394L44.8533 45.7194ZM39.8933 49.0794L37.2799 44.386C35.6266 45.0794 33.8399 45.4794 31.9466 45.4794C24.5599 45.4794 18.6133 39.506 18.6133 32.146H26.6133L19.0666 18.5994C15.4666 21.986 13.2533 26.786 13.2533 32.1194C13.2533 42.4127 21.5999 50.786 31.9199 50.786C34.7466 50.786 37.4133 50.146 39.8133 49.026L39.8933 49.0794Z"
                                            fill="url(#paint0_linear_334_2666)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_2666" x1="14.5397" y1="9.72159"
                                                x2="54.411" y2="66.8705" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
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
                                    <div class="ab">支持一键恢复出厂设置</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M37.3334 53.5327H26.6667V58.866H21.3334V53.5327H13.3334C11.84 53.5327 10.6667 52.3327 10.6667 50.866V42.866H5.33337V37.5327H10.6667V26.866H5.33337V21.5327H10.6667V13.5327C10.6667 12.0394 11.84 10.866 13.3334 10.866H21.3334V5.53271H26.6667V10.866H37.3334V5.53271H42.6667V10.866H50.6667C52.1334 10.866 53.3334 12.0394 53.3334 13.5327V21.5327H58.6667V26.866H53.3334V37.5327H58.6667V42.866H53.3334V50.866C53.3334 52.3327 52.1334 53.5327 50.6667 53.5327H42.6667V58.866H37.3334V53.5327ZM18.6667 18.866V29.5327H29.3334V18.866H18.6667Z"
                                            fill="url(#paint0_linear_334_6024)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_6024" x1="14.5398" y1="9.72159"
                                                x2="54.4112" y2="66.8705" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
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
                                    <div class="ab">适用多行业的智能控制算法</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M47.9999 5.53271C49.4666 5.53271 50.6666 6.70605 50.6666 8.19938V56.1994C50.6666 57.666 49.4666 58.866 47.9999 58.866H15.9999C14.5066 58.866 13.3333 57.666 13.3333 56.1994V8.19938C13.3333 6.70605 14.5066 5.53271 15.9999 5.53271H47.9999ZM39.9999 40.1994H34.6666V45.5327H39.9999V40.1994ZM29.3333 40.1994H23.9999V45.5327H29.3333V40.1994ZM34.6666 16.1994H29.3333V21.5327H23.9999V26.866H29.3066V32.1994H34.6399L34.6133 26.866H39.9466V21.5327H34.6133V16.1994H34.6666Z"
                                            fill="url(#paint0_linear_334_4456)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_4456" x1="19.7778" y1="9.72159"
                                                x2="62.2606" y2="52.346" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">08</div>
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
                                    <div class="ab">自动演算功能</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.2 50.8659L5.30664 60.1992V10.8659C5.30664 9.37255 6.47997 8.19922 7.97331 8.19922H55.9733C57.44 8.19922 58.64 9.37255 58.64 10.8659V48.1992C58.64 49.6659 57.44 50.8659 55.9733 50.8659H17.1733H17.2ZM30.08 32.5192L23.4666 25.9059L19.68 29.6659L30.0266 40.0126L45.0933 24.9192L41.3066 21.1326L29.9733 32.4392L30.08 32.5192Z"
                                            fill="url(#paint0_linear_334_5267)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_5267" x1="14.5131" y1="12.2834"
                                                x2="53.0385" y2="68.9191" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">09</div>
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
                                    <div class="ab">显示误差修正功能</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M31.9733 8.9727L38.48 4.59936L41.4133 9.02603L34.5866 13.5594V27.506L46.6666 20.5194L47.1733 12.3327L52.48 12.6527L51.9733 20.466L58.9866 23.9327L56.6133 28.706L49.2533 25.0527L37.1466 32.0127L49.2266 38.9727L56.56 35.3194L58.9066 40.0927L51.8666 43.5594L52.3466 51.3727L47.0133 51.6927L46.48 43.522L34.3733 36.5354V50.482L41.1733 55.0154L38.2133 59.442L31.68 55.0687L25.1466 59.4154L22.1866 54.962L28.9866 50.402V36.4287L16.88 43.3887L16.3466 51.5594L11.0133 51.2127L11.4933 43.3727L4.45329 39.8794L6.79996 35.0794L14.1333 38.706L26.2133 31.7194L14.1066 24.7327L6.74662 28.3594L4.37329 23.5594L11.3866 20.066L10.88 12.226L16.1866 11.8794L16.6933 20.05L28.7733 27.01V13.026L21.9466 8.46603L24.88 4.0127L31.3866 8.35936L31.9733 8.9727Z"
                                            fill="url(#paint0_linear_334_3495)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_3495" x1="13.8007" y1="8.36619"
                                                x2="55.4476" y2="67.1814" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">10</div>
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
                                    <div class="ab">支持加热、加热冷却、位式等模式可选</div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="item">
                                <div class="deco">
                                    <div class="bg">
                                        <svg width="128" height="128" viewBox="0 0 128 128" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="128" height="128" rx="64" fill="url(#paint0_linear_334_10233)"
                                                fill-opacity="0.3" />
                                            <rect x="0.25" y="0.25" width="127.5" height="127.5" rx="63.75"
                                                stroke="url(#paint1_linear_334_10233)" stroke-opacity="0.1"
                                                stroke-width="0.5" />
                                            <rect x="8" y="8" width="112" height="112" rx="56"
                                                fill="url(#paint2_linear_334_10233)" />
                                            <circle cx="103.15" cy="111" r="10" fill="#196BB6" stroke="white"
                                                stroke-width="2" />
                                            <defs>
                                                <linearGradient id="paint0_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" stop-opacity="0" />
                                                    <stop offset="1" stop-color="#29ABE2" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_334_10233" x1="64" y1="0" x2="64"
                                                    y2="128" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29ABE2" />
                                                    <stop offset="1" stop-color="#29ABE2" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_334_10233" x1="64" y1="8" x2="64"
                                                    y2="120" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="white" stop-opacity="0" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="64" height="65" viewBox="0 0 64 65" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.6668 53.5327V37.5327C10.6668 25.746 20.2134 16.1994 31.9734 16.1994C43.7334 16.1994 53.3068 25.746 53.3068 37.5327V53.5327H55.9734V58.866H7.97344V53.5327H10.6401H10.6668ZM16.0001 37.5327H21.3334C21.3334 31.6394 26.1068 26.866 31.9734 26.866V21.5327C23.1201 21.5327 15.9734 28.6794 15.9734 37.5327H16.0001ZM29.3068 5.53271H34.6401V13.5327H29.3068V5.53271ZM52.6934 12.9994L56.4534 16.7594L50.7734 22.4127L46.9868 18.626L52.6401 12.946L52.6934 12.9994ZM7.41344 16.7594L11.1734 12.9727L16.8268 18.626L13.0401 22.386L7.36011 16.706L7.41344 16.7594Z"
                                            fill="url(#paint0_linear_334_2684)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_334_2684" x1="15.8346" y1="9.72159"
                                                x2="56.7366" y2="63.6869" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#29ABE2" />
                                                <stop offset="1" stop-color="#196BB6" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div class="num">11</div>
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
                                    <div class="ab">支持多种报警模式可选</div>
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
            name: '智能温控',
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

<style lang="scss">
.s1 {
    .wrap {
        .prd-feat-list {
            --bs-gutter-x: 24px;
            > .col-lg-3,
            > .col-lg-4 {
                margin-bottom: var(--bs-gutter-x);
            }

            .item {
                height: 350px;
                background-color: white;
                @include flex-c();
                justify-content: flex-start;
                align-items: center;
                gap: tovw(24px);
                padding: fluid(60px) 32px 0;
                cursor: pointer;
                transition: all .3s;
                border-radius: 10px;
                border: 1px solid #29ABE2;
                background: linear-gradient(180deg, rgba(25, 107, 182, 0.00) 60.19%, rgba(25, 107, 182, 0.10) 100%);
                text-align: center;

                &:hover {
                    box-shadow: 0 10px 20px -3px rgba(25, 107, 182, 0.2);
                }

                .deco {
                    width: 128px;
                    height: 128px;
                    @include lap {
                        width: 96px;
                        height: 96px;
                    }
                    max-width: 128px;
                    max-height: 128px;
                    @include flex-c();
                    justify-content: center;
                    position: relative;
                    align-items: center;
                    flex: none;

                    > svg {
                        z-index: 9;
                        width: 60px;
                        height: auto;
                    }

                    .bg {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        inset: 0;

                        svg {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .num {
                        width: 100%;
                        font-family: "SpaceGrotesk";
                        font-size: fluid(60px, 22px);
                        font-weight: 700;
                        line-height: normal;
                        background: linear-gradient(90deg, #29ABE2 10.76%, rgba(41, 171, 226, 0.00) 124.7%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-style: italic;
                        position: absolute;
                        left: 0;
                        top: -48px;
                        text-align: center;
                        @include lap {
                            font-size: 48px;
                            top: -32px;
                        }
                    }
                }

                .l {
                    display: flex;
                    svg {
                        width: 100%;
                    }
                    .hori {
                        max-width: 90%;
                    }
                    .vertical {
                        width: 2px;
                        height: 98px;
                        display: none;
                    }
                }

                .info {
                    .t1 {
                        color: var(--main-black, #0F171F);
                        text-align: center;
                        font-size: fluid(24px, 18px);
                        font-style: normal;
                        font-weight: 700;
                        line-height: 130%; /* 31.2px */
                        text-transform: uppercase;
                    }

                    .ab {
                        width: 100%;
                        max-width: min(375px, 90vw);
                        color: var(--main-black, #0F171F);
                        text-align: center;
                        font-size: fluid(20px, 14px);
                        font-style: normal;
                        font-weight: 400;
                        line-height: 130%; /* 26px */
                        //text-transform: uppercase;
                        margin-top: 6px;
                    }
                }
            }
        }
    }
}
@include mo {
    .s1 {
        .wrap {
            .prd-feat-list {
                --bs-gutter-x: 12px;
                > .col-lg-3,
                > .col-lg-4,
                > .col-lg-6 {
                    margin-bottom: var(--bs-gutter-x);
                }

                .item {
                    height: auto;
                    @include flex-r();
                    // padding: 24px 32px 16px 16px;
                    padding: 16px 32px 16px 16px;
                    gap: 24px;
                    .deco {
                        width: 56px;
                        height: 56px;
                        > svg {
                            width: 32px;
                        }
                        .num {
                            font-size: 22px;
                            top: -16px;
                        }
                    }
                    .l {
                        .hori {
                            display: none;
                        }
                        .vertical {
                            display: block;
                        }
                    }
                    .info {
                        .t1 {
                            text-align: left;
                            font-size: 18px;
                        }
                        .ab {
                            font-size: 14px;
                            text-align: left;
                        }
                    }
                    &:hover {

                    }
                }
            }
        }
    }
}
</style>
<style scoped lang="scss">
.s1,
.s2 {
    padding: fluid(80px, 64px) 0;
    .wrap {
        & > .la {
            color: var(--main-black, #0F171F);
            font-size: fluid(30px, 24px);
            font-weight: 700;
            line-height: 150%; /* 45px */
        }
        .list {
            margin-top: fluid(48px, 32px);
        }
    }
}
.s1 {
    .wrap {
        .back {
            margin-top: fluid(44px);
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
                    font-size: fluid(60px);
                    font-weight: 700;
                    position: absolute;
                    top: 16px;
                    right: 20px;
                    transition: all .3s;
                }
                .t {
                    color: var(--main-blue, #196BB6);
                    font-size: fluid(24px);
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin-top: fluid(80px);
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
            margin-top: fluid(100px, 40px);
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


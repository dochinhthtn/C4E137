const fs = require('fs');
let noAutoIncrementTables = [
    "dm_khach",
    "dm_master",
    "dm_nuoc_tinhtp",
    "dm_donvi",
    "dm_nsp",
    "dm_pttai",
    "dm_sp",
    "dm_tte",
    "dm_vaitro",
    "acl_scope",
    "acl_resource",
    "acl_operation",
    "user_infor",
    "user_vaitro",
    "AspNetUserLogins",
    "AspNetUserTokens",
];

let tables = [
    "dm_khach",
    "dm_master",
    "dm_nuoc_tinhtp",
    "dm_tygia",
    "dm_sequence",
    "dm_donvi",
    "dm_chucvu",
    "dm_skien_tthat",
    "dm_nsp",
    "dm_pttai",
    "dm_sp",
    "dm_tte",
    "dm_vaitro",
    "dm_tailieu_tab",
    "dm_notify",
    "dm_congty",
    "acl_scope",
    "acl_resource",
    "acl_operation",
    "user_infor",
    "vaitro_quyen",
    "user_vaitro",
    "user_quyen",
    "AspNetUserLogins",
    "AspNetUserTokens",
    // "dm_template",
    // "dm_comment",
    // "dm_email",
    // "__EFMigrationsHistory",
    // "buocduyet_hoso",
    // "DeviceCodes",
    // "Keys",
    // "nvu_dm_sdbs",
    // "PersistedGrants",
    // "phancap_boithuong",
    // "requests",
    // "tbl_bieu_mau",
    // "user_donvi",
    // "Scope",
    // "vaitro_thumuc_quyen",
    // "phancap_duyet",
    // "thumuc_tientrinh",
    // "kbtt_ctu",
    // "phancap_duyet_ct",
    // "phancap_duyet_donvi",
    // "hoso_template_tab",
    // "template_action",
    // "bctt_ctu",
    // "dexuat_kiennghi",
    // "thumuc_hs",
    // "topic_comment",
    // "tthai_hso",
    // "phancap_duyet_vaitro",
    // "tailieu_duthao_banhanh",
    // "bctt_ct",
    // "bctt_daumoi_capdon",
    // "bctt_ky_tphi",
    // "bctt_kyphi_tthu",
    // "gqkn_ctu",
    // "tailieu_hs",
    // "user_topic",
    // "kbtt_lsu_ttac",
    // "user_tthai",
    // "bctt_dongtai_bh",
    // "gqkn_ct",
    // "pa_gdinh_ctu",
    // "tlieu_bookmark",
    // "bctt_dongtai_lhe",
    // "pa_gdinh_ct",
    // "IntegrationEventLog"
]

let setIndentityOn = '';
let result = '';
let setIndentityOff = '';

for (const table of tables) {

    result += `
    SET IDENTITY_INSERT pvi_uat.dbo.${table} ON;
    TRUNCATE TABLE pvi_uat.dbo.${table};
    INSERT INTO pvi_uat.dbo.${table} SELECT * FROM pvi_old_uat.dbo.${table};
    SET IDENTITY_INSERT pvi_uat.dbo.${table} OFF;
    `;

    if (!noAutoIncrementTables.find(t => t == table)) {
        setIndentityOn += `
    SET IDENTITY_INSERT pvi_uat.dbo.${table} ON;
        `;
        setIndentityOff += `
    SET IDENTITY_INSERT pvi_uat.dbo.${table} OFF;
        `;
    }
}
setIndentityOn += "GO";
result += "";
setIndentityOff += "GO";

const content = result;

fs.writeFile('hello.txt', content, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
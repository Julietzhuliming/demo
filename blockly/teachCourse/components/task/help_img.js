const help_img_obj = {
    help_001: 'pic_01.png',
    help_002: 'pic_02.gif',
    help_003: 'pic_03.png',
    help_004: 'pic_04.gif',
    help_005: 'pic_05.gif',
    help_006: 'pic_06.png',
    help_007: 'pic_07.gif',
    help_008: 'pic_08.gif',
    help_009: 'pic_06.png',
    help_010: 'pic_06.png',
    help_011: 'pic_06.png',
    help_012: 'pic_06.png',
    help_013: 'pic_06.png',
    help_014: 'pic_06.png',
    help_015: 'pic_04.gif',
    help_016: 'pic_06.png',
    help_017: 'pic_09.png',
    help_018: 'pic_09.png',
    help_019: 'pic_09.png',
    help_020: 'pic_10.gif',
    help_021: 'pic_11.png',
    help_022: 'pic_12.png',
    help_023: 'pic_13.gif',
    help_024: 'pic_14.gif',
    help_025: 'pic_15.png',
    help_026: 'pic_13.gif',
    help_027: 'pic_16.gif',
    help_028: 'pic_06.png',
    help_029: 'pic_17.png',
    help_030: 'pic_18.png',
    help_031: 'pic_16.gif',
    help_032: 'pic_19.png',
    help_033: 'pic_20.png',
    help_034: 'pic_21.png',
    help_035: 'pic_22.gif',
    help_036: 'pic_15.png',
    help_037: 'pic_23.png',
    help_038: 'pic_06.gif',
    help_039: 'pic_24.gif',
    help_040: 'pic_24.gif',
}

const img_width_obj = {
    pic_01: '20%',
    pic_02: '25%',
    pic_03: '18%',
    pic_04: '70%',
    pic_05: '52%',
    pic_06: '40%',
    pic_07: '60%',
    pic_08: '65%',
    pic_09: '45%',
    pic_10: '41%',
    pic_11: '30%',
    pic_12: '38%',
    pic_13: '70%',
    pic_14: '70%',
    pic_15: '33%',
    pic_16: '70%',
    pic_17: '60%',
    pic_18: '35%',
    pic_19: '33%',
    pic_20: '60%',
    pic_21: '68%',
    pic_22: '55%',
    pic_23: '31%',
}

function getHelpImg(text) {
    const helpIndex = text.match(/help_\d*/)
    return window.BASE_COURSE_IMGPATH + help_img_obj[helpIndex]
}

function getImgWidth(url_pic) {
    const pic = url_pic.match(/pic_\d*/)
    return img_width_obj[pic]
}

export {getHelpImg, getImgWidth}
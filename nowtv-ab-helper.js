var segmentation = {
    isXboxUser:function () {
        console.log('is xbox user return true');
        return true;
    },
    isPs4User:function () {
        console.log('is ps4 user return false');
        return false;
    }
};

var experience = {
    setNoCrossSellPage:function () {
        console.log('no cross sell page');
    }
};


window.NOWTV_SEGMENTATION = segmentation;
window.NOWTV_EXPERIENCE = experience;
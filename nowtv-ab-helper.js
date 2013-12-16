var segmentation = {
    isXboxUser:function () {
        console.log('is xbox user');
        return true;
    }
};

var experience = {
    setNoCrossSellPage:function () {
        console.log('no cross sell page');
    }
};


window.NOWTV_SEGMENTATION = segmentation;
window.NOWTV_EXPERIENCE = experience;
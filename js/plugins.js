$(document).ready(function () {
    
    $('.sidenav').sidenav();
    //générer des infobulles 
    $('.tooltipped').tooltip();
    //générer un truc d'aide stylé
    $('.tap-target').tapTarget();

    //force int only 
    jQuery.fn.ForceNumericOnly =
    function()
    {
        return this.each(function()
        {
            $(this).keydown(function(e)
            {
                var key = e.charCode || e.keyCode || 0;

                // allow backspace, tab, delete, enter, arrows and numbers ONLY
                // home, end, and numpad decimal
                return (
                    
                    key == 8 || 
                    key == 9 ||
                    key == 13 ||
                    key == 46 ||
                    key == 190 ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57) || // &é"'(-è_çà)
                    (key >= 96 && key <= 105));
            });
        });
    };

    //Stigma borned values on doubleclic edit (0 to 14)
    $(".input_setenchantlevel").ForceNumericOnly();

    /***** TODO : Trouver un truc meilleur même si ça fait le job (forcer les valeures 0 mini ou 14 maxi dans l'input après double clic) *****/
    $(".input_setenchantlevel").on('mouseup keyup', function () {
        $(this).val(Math.min(14, Math.max(0, $(this).val())));
    });

    //Aion classic enchantment stones level bornes values on input edit (1 to 150)
    $(".input_setclassicenchantlevel").ForceNumericOnly();

    $(".input_setclassicenchantlevel").on('mouseup keyup', function () {
        $(this).val(Math.min(190, Math.max(0, $(this).val())));
    });

    $(".input_setclassicenchantlevel").on('keypress', function (e) {
        if(e.which == 13) {
            $(this).val(Math.min(190, Math.max(0, $(this).val())));
        }
    });

    $(".input_setclassicenchantlevel").on("click", function(e){
        console.log("ouiii");
        if(!$(e.target).on(".input_setclassicenchantlevel")){
            $(this).val(Math.min(190, Math.max(0, $(this).val())));
        }
    });

    // Toggles des suppléments d'enchant Level 30 Gold gear 

    $(".toggleThirtyGoldLesserSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleThirtyGoldNormalSupplements").attr("disabled", true);
            $(".toggleThirtyGoldGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleThirtyGoldNormalSupplements").attr("disabled", false);
            $(".toggleThirtyGoldGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleThirtyGoldNormalSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleThirtyGoldLesserSupplements").attr("disabled", true);
            $(".toggleThirtyGoldGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleThirtyGoldLesserSupplements").attr("disabled", false);
            $(".toggleThirtyGoldGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleThirtyGoldGreaterSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleThirtyGoldNormalSupplements").attr("disabled", true);
            $(".toggleThirtyGoldLesserSupplements").attr("disabled", true);
        } else {
            $(".toggleThirtyGoldNormalSupplements").attr("disabled", false);
            $(".toggleThirtyGoldLesserSupplements").attr("disabled", false);
        }
    });

    // Toggles des suppléments d'enchant Level 40 Gold gear 

    $(".toggleFourtyGoldLesserSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFourtyGoldNormalSupplements").attr("disabled", true);
            $(".toggleFourtyGoldGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleFourtyGoldNormalSupplements").attr("disabled", false);
            $(".toggleFourtyGoldGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleFourtyGoldNormalSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFourtyGoldLesserSupplements").attr("disabled", true);
            $(".toggleFourtyGoldGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleFourtyGoldLesserSupplements").attr("disabled", false);
            $(".toggleFourtyGoldGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleFourtyGoldGreaterSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFourtyGoldNormalSupplements").attr("disabled", true);
            $(".toggleFourtyGoldLesserSupplements").attr("disabled", true);
        } else {
            $(".toggleFourtyGoldLesserSupplements").attr("disabled", false);
            $(".toggleFourtyGoldNormalSupplements").attr("disabled", false);
        }
    });

    // Toggles des suppléments d'enchant Level 50 Gold gear 

    $(".toggleFiftyGoldLesserSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyGoldNormalSupplements").attr("disabled", true);
            $(".toggleFiftyGoldGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyGoldNormalSupplements").attr("disabled", false);
            $(".toggleFiftyGoldGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleFiftyGoldNormalSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyGoldLesserSupplements").attr("disabled", true);
            $(".toggleFiftyGoldGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyGoldLesserSupplements").attr("disabled", false);
            $(".toggleFiftyGoldGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleFiftyGoldGreaterSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyGoldNormalSupplements").attr("disabled", true);
            $(".toggleFiftyGoldLesserSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyGoldNormalSupplements").attr("disabled", false);
            $(".toggleFiftyGoldLesserSupplements").attr("disabled", false);
        }
    });

    // Toggles des suppléments d'enchant Level 55 Gold gear 

    $(".toggleFiftyfiveGoldLesserSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyfiveGoldNormalSupplements").attr("disabled", true);
            $(".toggleFiftyfiveGoldGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyfiveGoldNormalSupplements").attr("disabled", false);
            $(".toggleFiftyfiveGoldGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleFiftyfiveGoldNormalSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyfiveGoldLesserSupplements").attr("disabled", true);
            $(".toggleFiftyfiveGoldGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyfiveGoldLesserSupplements").attr("disabled", false);
            $(".toggleFiftyfiveGoldGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleFiftyfiveGoldGreaterSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyfiveGoldNormalSupplements").attr("disabled", true);
            $(".toggleFiftyfiveGoldLesserSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyfiveGoldNormalSupplements").attr("disabled", false);
            $(".toggleFiftyfiveGoldLesserSupplements").attr("disabled", false);
        }
    });

    // Toggles des suppléments d'enchant Level 50 Eternal gear 

    $(".toggleFiftyEternalLesserSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyEternalNormalSupplements").attr("disabled", true);
            $(".toggleFiftyEternalGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyEternalNormalSupplements").attr("disabled", false);
            $(".toggleFiftyEternalGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleFiftyEternalNormalSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyEternalLesserSupplements").attr("disabled", true);
            $(".toggleFiftyEternalGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyEternalLesserSupplements").attr("disabled", false);
            $(".toggleFiftyEternalGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleFiftyEternalGreaterSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyEternalNormalSupplements").attr("disabled", true);
            $(".toggleFiftyEternalLesserSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyEternalNormalSupplements").attr("disabled", false);
            $(".toggleFiftyEternalLesserSupplements").attr("disabled", false);
        }
    });

    // Toggles des suppléments d'enchant Level 55 Eternal gear 

    $(".toggleFiftyfiveEternalLesserSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyfiveEternalNormalSupplements").attr("disabled", true);
            $(".toggleFiftyfiveEternalGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyfiveEternalNormalSupplements").attr("disabled", false);
            $(".toggleFiftyfiveEternalGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleFiftyfiveEternalNormalSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyfiveEternalLesserSupplements").attr("disabled", true);
            $(".toggleFiftyfiveEternalGreaterSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyfiveEternalLesserSupplements").attr("disabled", false);
            $(".toggleFiftyfiveEternalGreaterSupplements").attr("disabled", false);
        }
    });

    $(".toggleFiftyfiveEternalGreaterSupplements").change(function(){
        if($(this).is(":checked")){
            console.log("checked");
            $(".toggleFiftyfiveEternalNormalSupplements").attr("disabled", true);
            $(".toggleFiftyfiveEternalLesserSupplements").attr("disabled", true);
        } else {
            $(".toggleFiftyfiveEternalNormalSupplements").attr("disabled", false);
            $(".toggleFiftyfiveEternalLesserSupplements").attr("disabled", false);
        }
    });

    /* Restricts input for each element in the set of matched elements to the given inputFilter.
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    };
    
    // Install input filters.
    $("#uintTextBox").inputFilter(function(value) {
        return /^\d*$/.test(value); });
    $("#intLimitTextBox").inputFilter(function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 500); });
    $("#intTextBox").inputFilter(function(value) {
        return /^-?\d*$/.test(value); });
    $("#floatTextBox").inputFilter(function(value) {
        return /^-?\d*[.,]?\d*$/.test(value); });
    $("#currencyTextBox").inputFilter(function(value) {
        return /^-?\d*[.,]?\d{0,2}$/.test(value); });
    $("#basicLatinTextBox").inputFilter(function(value) {
        return /^[a-z]*$/i.test(value); });
    $("#extendedLatinTextBox").inputFilter(function(value) {
        return /^[a-z\u00c0-\u024f]*$/i.test(value); });
    $("#hexTextBox").inputFilter(function(value) {
        return /^[0-9a-f]*$/i.test(value); });*/
        
    });

function toast(myToast) {
    M.toast({html: myToast});
}

new Vue({
    el: "#app",
    data: {
        thirty_actual: 0,
        thirty_stones: 0,
        fourty_actual: 0,
        fourty_stones: 0,
        fifty_gold_actual: 0,
        fifty_gold_stones: 0,
        fifty_five_gold_actual: 0,
        fifty_five_gold_stones: 0,
        fifty_eternal_actual: 0,
        fifty_eternal_stones: 0,
        fifty_five_eternal_actual: 0,
        fifty_five_eternal_stones: 0,
        thirty_two_fails_in_a_row_at_plus_ten:false,
        fourty_two_fails_in_a_row_at_plus_ten:false,
        fifty_gold_two_fails_in_a_row_at_plus_ten:false,
        fifty_five_gold_two_fails_in_a_row_at_plus_ten:false,
        fifty_eternal_two_fails_in_a_row_at_plus_ten:false,
        fifty_five_eternal_two_fails_in_a_row_at_plus_ten:false,
        //STATIC DATA FOR AION CLASSIC ENCHANTMENT FORMULA
        range_limit:[0, 0],
        range_multiplier:[0, 0],
        quality_base: 0,
        quality_multiplier: 0,
        thirty_stone_level: 0,
        fourty_stone_level: 0,
        fifty_gold_stone_level: 0,
        fifty_five_gold_stone_level: 0,
        fifty_eternal_stone_level: 0,
        fifty_five_eternal_stone_level: 0,
        item_level:[30, 40, 50, 55],
        /***************************************/
        a_actual: 0,
        a_stones: [0, 0, 0],
        l_actual: 0,
        l_stones: [0, 0, 0],
        u_actual: 0,
        u_stones: [0, 0, 0],
        s_actual: 0,
        s_stones: 0,
        s_plusfifteen: 0,
        thirty_disabled:0,
        fourty_disabled:0,
        fifty_gold_disabled:0,
        fifty_five_gold_disabled:0,
        fifty_eternal_disabled:0,
        fifty_five_eternal_disabled:0,
        a_disabled: 0,
        l_disabled: 0,
        u_disabled: 0,
        s_disabled: 0,
        crit: 0,
        thirty_start: 0,
        fourty_start: 0,
        fifty_gold_start: 0,
        fifty_five_gold_start: 0,
        fifty_eternal_start: 0,
        fifty_five_eternal_start: 0,
        a_start: 0,
        l_start: 0,
        u_start: 0,
        s_start: 0,
        plus9safespot: false,
        plus12safespot: false,
        togglesuccessrate: false,
        toggleThirtyGoldLesserSupplements: false,
        toggleThirtyGoldNormalSupplements: false,
        toggleThirtyGoldGreaterSupplements: false,
        toggleFourtyGoldLesserSupplements: false,
        toggleFourtyGoldNormalSupplements: false,
        toggleFourtyGoldGreaterSupplements: false,
        toggleFiftyGoldLesserSupplements: false,
        toggleFiftyGoldNormalSupplements: false,
        toggleFiftyGoldGreaterSupplements: false,
        toggleFiftyfiveGoldLesserSupplements: false,
        toggleFiftyfiveGoldNormalSupplements: false,
        toggleFiftyfiveGoldGreaterSupplements: false,
        toggleFiftyEternalLesserSupplements: false,
        toggleFiftyEternalNormalSupplements: false,
        toggleFiftyEternalGreaterSupplements: false,
        toggleFiftyfiveEternalLesserSupplements: false,
        toggleFiftyfiveEternalNormalSupplements: false,
        toggleFiftyfiveEternalGreaterSupplements: false,
        stigmaedit: false,
        editedTodo: null
        //not used
        //togglesuccessrate2: false
    },
    methods: {
        /*************************************************** THIRTY GEAR (SUPPLEMENTS NON TRAITES) /***************************************************/
        thirty_resetlvl: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.thirty_actual = 0;
            this.thirty_disabled = 0;
            this.thirty_start = 0;
            this.thirty_two_fails_in_a_row_at_plus_ten = false,
            $('#thirty_resultat').hide();
        },
        thirty_resetstones: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.thirty_stones = 0;
        },
        thirty_resetall: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.thirty_actual = 0;
            this.thirty_stones = 0;
            this.thirty_disabled = 0;
            this.thirty_start = 0;
            $('#thirty_resultat').hide();
        },
        thirty_toggle: function (a) {
            try {
                if (a == "thirty") {
                    //STATIC DATA FOR AION CLASSIC ENCHANTMENT FORMULA
                    this.quality_base = 200,
                    this.quality_multiplier = 20,
                    this.range_limit = [800, 500],
                    this.range_multiplier = [1, 0.5],
                    /*********************************************** */
                    this.thirty_stones++;
                    this.thirty_start = 1;

                    var lesser_supplements_bonus = 50;
                    var normal_supplements_bonus = 100;
                    var greater_supplements_bonus = 150;
                    var supplements_bonus = 0;

                    if (this.toggleThirtyGoldLesserSupplements == true) {
                        supplements_bonus = lesser_supplements_bonus;
                    } 

                    if (this.toggleThirtyGoldNormalSupplements == true) {
                        supplements_bonus = normal_supplements_bonus;
                    }

                    if (this.toggleThirtyGoldGreaterSupplements == true) {
                        supplements_bonus = greater_supplements_bonus;
                    }

                    if (this.toggleThirtyGoldLesserSupplements == false && this.toggleThirtyGoldNormalSupplements == false && this.toggleThirtyGoldGreaterSupplements == false) {
                        supplements_bonus = 0;
                    }

                    var thirty_rate_values = [];
                    for (i=0; i<=15; i++) {
                        if (i<10) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            thirty_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[0], this.range_multiplier[0] * (this.quality_base + this.quality_multiplier * 
                            (this.thirty_stone_level - this.item_level[0])))) / 10;
                        } else if (i>=10 && i <=15) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            thirty_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[1], this.range_multiplier[1] * (this.quality_base + this.quality_multiplier * 
                                (this.thirty_stone_level - this.item_level[0])))) / 10;
                        }
                    }

                    var thirty_res1 = Math.floor((Math.random() * 100) + 1);
                    var thirty_res2 = thirty_rate_values[this.thirty_actual];
                     if (thirty_res2 < 0) {
                         thirty_res2 = 0;
                     }
                    if ($(".input_setclassicenchantlevel").val().length === 0) {
                        $(".input_setclassicenchantlevel").prev().val("0");
                    }

                    $('#thirty_resultat').show();
                    $('#thirty_result1').html(thirty_res1);
                    $('#thirty_result2').html(thirty_res2);

                    if (thirty_res1 < thirty_res2) {
                        //success
                        $('#thirty_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //success (+1 applied)
                        this.thirty_actual += 1;
                    } else {
                        //fail
                        $('#thirty_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //if item is +10, +11, [...], +14 and fail, reset to +10
                        //no safespot at +10, so if for instance it fails at +12, resets to +10, AND keep downgrading (+9) if it fails twice in a row
                        if (this.thirty_actual >= 11 && this.thirty_two_fails_in_a_row_at_plus_ten == false) {
                            this.thirty_actual = 10;
                            this.thirty_two_fails_in_a_row_at_plus_ten = true;
                        } // if item is +0, keep it +0 (no negative enchantment in Aion)
                        else if (this.thirty_actual <= 0) {
                            this.thirty_actual = 0;
                        } // else fail (-1 applied)
                        else {
                            this.thirty_actual -= 1;
                        }
                    }

                    //switch back the toggle to allow the +10 reset again
                    this.thirty_two_fails_in_a_row_at_plus_ten = false;

                    if (this.thirty_actual == 15) {
                        $('#thirty_resultat').hide();
                        this.thirty_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        /*************************************************** FOURTY GEAR (SUPPLEMENTS NON TRAITES) /***************************************************/
        fourty_resetlvl: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fourty_actual = 0;
            this.fourty_disabled = 0;
            this.fourty_start = 0;
            this.fourty_two_fails_in_a_row_at_plus_ten = false,
            $('#fourty_resultat').hide();
        },
        fourty_resetstones: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fourty_stones = 0;
        },
        fourty_resetall: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fourty_actual = 0;
            this.fourty_stones = 0;
            this.fourty_disabled = 0;
            this.fourty_start = 0;
            $('#fourty_resultat').hide();
        },
        fourty_toggle: function (a) {
            try {
                if (a == "fourty") {
                    //STATIC DATA FOR AION CLASSIC ENCHANTMENT FORMULA
                    this.quality_base = 200,
                    this.quality_multiplier = 20,
                    this.range_limit = [800, 500],
                    this.range_multiplier = [1, 0.5],
                    /*********************************************** */
                    this.fourty_stones++;
                    this.fourty_start = 1;

                    var lesser_supplements_bonus = 50;
                    var normal_supplements_bonus = 100;
                    var greater_supplements_bonus = 150;
                    var supplements_bonus = 0;

                    if (this.toggleFourtyGoldLesserSupplements == true) {
                        supplements_bonus = lesser_supplements_bonus;
                    } 

                    if (this.toggleFourtyGoldNormalSupplements == true) {
                        supplements_bonus = normal_supplements_bonus;
                    }

                    if (this.toggleFourtyGoldGreaterSupplements == true) {
                        supplements_bonus = greater_supplements_bonus;
                    }

                    if (this.toggleFourtyGoldLesserSupplements == false && this.toggleFourtyGoldNormalSupplements == false && this.toggleFourtyGoldGreaterSupplements == false) {
                        supplements_bonus = 0;
                    }

                    var fourty_rate_values = [];
                    for (i=0; i<=15; i++) {
                        if (i<10) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            fourty_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[0], this.range_multiplier[0] * (this.quality_base + this.quality_multiplier * 
                            (this.fourty_stone_level - this.item_level[1])))) / 10;
                        } else if (i>=10 && i <=15) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            fourty_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[1], this.range_multiplier[1] * (this.quality_base + this.quality_multiplier * 
                                (this.fourty_stone_level - this.item_level[1])))) / 10;
                        }
                    }

                    var fourty_res1 = Math.floor((Math.random() * 100) + 1);
                    var fourty_res2 = fourty_rate_values[this.fourty_actual];
                     if (fourty_res2 < 0) {
                         fourty_res2 = 0;
                     }
                    if ($(".input_setclassicenchantlevel").val().length === 0) {
                        $(".input_setclassicenchantlevel").prev().val("0");
                    }

                    $('#fourty_resultat').show();
                    $('#fourty_result1').html(fourty_res1);
                    $('#fourty_result2').html(fourty_res2);

                    if (fourty_res1 < fourty_res2) {
                        //success
                        $('#fourty_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //success (+1 applied)
                        this.fourty_actual += 1;
                    } else {
                        //fail
                        $('#fourty_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //if item is +10, +11, [...], +14 and fail, reset to +10
                        //no safespot at +10, so if for instance it fails at +12, resets to +10, AND keep downgrading (+9) if it fails twice in a row
                        if (this.fourty_actual >= 11 && this.fourty_two_fails_in_a_row_at_plus_ten == false) {
                            this.fourty_actual = 10;
                            this.fourty_two_fails_in_a_row_at_plus_ten = true;
                        } // if item is +0, keep it +0 (no negative enchantment in Aion)
                        else if (this.fourty_actual <= 0) {
                            this.fourty_actual = 0;
                        } // else fail (-1 applied)
                        else {
                            this.fourty_actual -= 1;
                        }
                    }

                    //switch back the toggle to allow the +10 reset again
                    this.fourty_two_fails_in_a_row_at_plus_ten = false;

                    if (this.fourty_actual == 15) {
                        $('#fourty_resultat').hide();
                        this.fourty_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        /*************************************************** FIFTY GOLD GEAR (SUPPLEMENTS NON TRAITES) /***************************************************/
        fifty_gold_resetlvl: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_gold_actual = 0;
            this.fifty_gold_disabled = 0;
            this.fifty_gold_start = 0;
            this.fifty_gold_two_fails_in_a_row_at_plus_ten = false,
            $('#fifty_gold_resultat').hide();
        },
        fifty_gold_resetstones: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_gold_stones = 0;
        },
        fifty_gold_resetall: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_gold_actual = 0;
            this.fifty_gold_stones = 0;
            this.fifty_gold_disabled = 0;
            this.fifty_gold_start = 0;
            $('#fifty_gold_resultat').hide();
        },
        fifty_gold_toggle: function (a) {
            try {
                if (a == "fifty_gold") {
                    //STATIC DATA FOR AION CLASSIC ENCHANTMENT FORMULA
                    this.quality_base = 200,
                    this.quality_multiplier = 20,
                    this.range_limit = [800, 500],
                    this.range_multiplier = [1, 0.5],
                    /*********************************************** */
                    this.fifty_gold_stones++;
                    this.fifty_gold_start = 1;

                    var lesser_supplements_bonus = 50;
                    var normal_supplements_bonus = 100;
                    var greater_supplements_bonus = 150;
                    var supplements_bonus = 0;

                    if (this.toggleFiftyGoldLesserSupplements == true) {
                        supplements_bonus = lesser_supplements_bonus;
                    } 

                    if (this.toggleFiftyGoldNormalSupplements == true) {
                        supplements_bonus = normal_supplements_bonus;
                    }

                    if (this.toggleFiftyGoldGreaterSupplements == true) {
                        supplements_bonus = greater_supplements_bonus;
                    }

                    if (this.toggleFiftyGoldLesserSupplements == false && this.toggleFiftyGoldNormalSupplements == false && this.toggleFiftyGoldGreaterSupplements == false) {
                        supplements_bonus = 0;
                    }

                    var fifty_gold_rate_values = [];
                    for (i=0; i<=15; i++) {
                        if (i<10) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            fifty_gold_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[0], this.range_multiplier[0] * (this.quality_base + this.quality_multiplier * 
                            (this.fifty_gold_stone_level - this.item_level[2])))) / 10;
                        } else if (i>=10 && i <=15) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            fifty_gold_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[1], this.range_multiplier[1] * (this.quality_base + this.quality_multiplier * 
                                (this.fifty_gold_stone_level - this.item_level[2])))) / 10;
                        }
                    }

                    var fifty_gold_res1 = Math.floor((Math.random() * 100) + 1);
                    var fifty_gold_res2 = fifty_gold_rate_values[this.fifty_gold_actual];
                     if (fifty_gold_res2 < 0) {
                         fifty_gold_res2 = 0;
                     }
                    if ($(".input_setclassicenchantlevel").val().length === 0) {
                        $(".input_setclassicenchantlevel").prev().val("0");
                    }

                    $('#fifty_gold_resultat').show();
                    $('#fifty_gold_result1').html(fifty_gold_res1);
                    $('#fifty_gold_result2').html(fifty_gold_res2);

                    if (fifty_gold_res1 < fifty_gold_res2) {
                        //success
                        $('#fifty_gold_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //success (+1 applied)
                        this.fifty_gold_actual += 1;
                    } else {
                        //fail
                        $('#fifty_gold_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //if item is +10, +11, [...], +14 and fail, reset to +10
                        //no safespot at +10, so if for instance it fails at +12, resets to +10, AND keep downgrading (+9) if it fails twice in a row
                        if (this.fifty_gold_actual >= 11 && this.fifty_gold_two_fails_in_a_row_at_plus_ten == false) {
                            this.fifty_gold_actual = 10;
                            this.fifty_gold_two_fails_in_a_row_at_plus_ten = true;
                        } // if item is +0, keep it +0 (no negative enchantment in Aion)
                        else if (this.fifty_gold_actual <= 0) {
                            this.fifty_gold_actual = 0;
                        } // else fail (-1 applied)
                        else {
                            this.fifty_gold_actual -= 1;
                        }
                    }

                    //switch back the toggle to allow the +10 reset again
                    this.fifty_gold_two_fails_in_a_row_at_plus_ten = false;

                    if (this.fifty_gold_actual == 15) {
                        $('#fifty_gold_resultat').hide();
                        this.fifty_gold_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        /*************************************************** FIFTY FIVE GOLD GEAR (SUPPLEMENTS NON TRAITES) /***************************************************/
        fifty_five_gold_resetlvl: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_five_gold_actual = 0;
            this.fifty_five_gold_disabled = 0;
            this.fifty_five_gold_start = 0;
            this.fifty_five_gold_two_fails_in_a_row_at_plus_ten = false,
            $('#fifty_five_gold_resultat').hide();
        },
        fifty_five_gold_resetstones: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_five_gold_stones = 0;
        },
        fifty_five_gold_resetall: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_five_gold_actual = 0;
            this.fifty_five_gold_stones = 0;
            this.fifty_five_gold_disabled = 0;
            this.fifty_five_gold_start = 0;
            $('#fifty_five_gold_resultat').hide();
        },
        fifty_five_gold_toggle: function (a) {
            try {
                if (a == "fifty_five_gold") {
                    //STATIC DATA FOR AION CLASSIC ENCHANTMENT FORMULA
                    this.quality_base = 200,
                    this.quality_multiplier = 20,
                    this.range_limit = [800, 500],
                    this.range_multiplier = [1, 0.5],
                    /*********************************************** */
                    this.fifty_five_gold_stones++;
                    this.fifty_five_gold_start = 1;

                    var lesser_supplements_bonus = 50;
                    var normal_supplements_bonus = 100;
                    var greater_supplements_bonus = 150;
                    var supplements_bonus = 0;

                    if (this.toggleFiftyfiveGoldLesserSupplements == true) {
                        supplements_bonus = lesser_supplements_bonus;
                    } 

                    if (this.toggleFiftyfiveGoldNormalSupplements == true) {
                        supplements_bonus = normal_supplements_bonus;
                    }

                    if (this.toggleFiftyfiveGoldGreaterSupplements == true) {
                        supplements_bonus = greater_supplements_bonus;
                    }

                    if (this.toggleFiftyfiveGoldLesserSupplements == false && this.toggleFiftyfiveGoldNormalSupplements == false && this.toggleFiftyfiveGoldGreaterSupplements == false) {
                        supplements_bonus = 0;
                    }

                    var fifty_five_gold_rate_values = [];
                    for (i=0; i<=15; i++) {
                        if (i<10) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            fifty_five_gold_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[0], this.range_multiplier[0] * (this.quality_base + this.quality_multiplier * 
                            (this.fifty_five_gold_stone_level - this.item_level[3])))) / 10;
                        } else if (i>=10 && i <=15) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            fifty_five_gold_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[1], this.range_multiplier[1] * (this.quality_base + this.quality_multiplier * 
                                (this.fifty_five_gold_stone_level - this.item_level[3])))) / 10;
                        }
                    }

                    var fifty_five_gold_res1 = Math.floor((Math.random() * 100) + 1);
                    var fifty_five_gold_res2 = fifty_five_gold_rate_values[this.fifty_five_gold_actual];
                     if (fifty_five_gold_res2 < 0) {
                         fifty_five_gold_res2 = 0;
                     }
                    if ($(".input_setclassicenchantlevel").val().length === 0) {
                        $(".input_setclassicenchantlevel").prev().val("0");
                    }

                    $('#fifty_five_gold_resultat').show();
                    $('#fifty_five_gold_result1').html(fifty_five_gold_res1);
                    $('#fifty_five_gold_result2').html(fifty_five_gold_res2);

                    if (fifty_five_gold_res1 < fifty_five_gold_res2) {
                        //success
                        $('#fifty_five_gold_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //success (+1 applied)
                        this.fifty_five_gold_actual += 1;
                    } else {
                        //fail
                        $('#fifty_five_gold_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //if item is +10, +11, [...], +14 and fail, reset to +10
                        //no safespot at +10, so if for instance it fails at +12, resets to +10, AND keep downgrading (+9) if it fails twice in a row
                        if (this.fifty_five_gold_actual >= 11 && this.fifty_five_gold_two_fails_in_a_row_at_plus_ten == false) {
                            this.fifty_five_gold_actual = 10;
                            this.fifty_five_gold_two_fails_in_a_row_at_plus_ten = true;
                        } // if item is +0, keep it +0 (no negative enchantment in Aion)
                        else if (this.fifty_five_gold_actual <= 0) {
                            this.fifty_five_gold_actual = 0;
                        } // else fail (-1 applied)
                        else {
                            this.fifty_five_gold_actual -= 1;
                        }
                    }

                    //switch back the toggle to allow the +10 reset again
                    this.fifty_five_gold_two_fails_in_a_row_at_plus_ten = false;

                    if (this.fifty_five_gold_actual == 15) {
                        $('#fifty_five_gold_resultat').hide();
                        this.fifty_five_gold_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        /*************************************************** FIFTY ETERNAL GEAR (SUPPLEMENTS NON TRAITES) /***************************************************/
        fifty_eternal_resetlvl: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_eternal_actual = 0;
            this.fifty_eternal_disabled = 0;
            this.fifty_eternal_start = 0;
            this.fifty_eternal_two_fails_in_a_row_at_plus_ten = false,
            $('#fifty_eternal_resultat').hide();
        },
        fifty_eternal_resetstones: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_eternal_stones = 0;
        },
        fifty_eternal_resetall: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_eternal_actual = 0;
            this.fifty_eternal_stones = 0;
            this.fifty_eternal_disabled = 0;
            this.fifty_eternal_start = 0;
            $('#fifty_eternal_resultat').hide();
        },
        fifty_eternal_toggle: function (a) {
            try {
                if (a == "fifty_eternal") {
                    //STATIC DATA FOR AION CLASSIC ENCHANTMENT FORMULA
                    this.quality_base = 150,
                    this.quality_multiplier = 15,
                    this.range_limit = [800, 500],
                    this.range_multiplier = [1, 0.5],
                    /*********************************************** */
                    this.fifty_eternal_stones++;
                    this.fifty_eternal_start = 1;

                    var lesser_supplements_bonus = 50;
                    var normal_supplements_bonus = 100;
                    var greater_supplements_bonus = 150;
                    var supplements_bonus = 0;

                    if (this.toggleFiftyEternalLesserSupplements == true) {
                        supplements_bonus = lesser_supplements_bonus;
                    } 

                    if (this.toggleFiftyEternalNormalSupplements == true) {
                        supplements_bonus = normal_supplements_bonus;
                    }

                    if (this.toggleFiftyEternalGreaterSupplements == true) {
                        supplements_bonus = greater_supplements_bonus;
                    }

                    if (this.toggleFiftyEternalLesserSupplements == false && this.toggleFiftyEternalNormalSupplements == false && this.toggleFiftyEternalGreaterSupplements == false) {
                        supplements_bonus = 0;
                    }

                    var fifty_eternal_rate_values = [];
                    for (i=0; i<=15; i++) {
                        if (i<10) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            fifty_eternal_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[0], this.range_multiplier[0] * (this.quality_base + this.quality_multiplier * 
                            (this.fifty_eternal_stone_level - this.item_level[2])))) / 10;
                        } else if (i>=10 && i <=15) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            fifty_eternal_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[1], this.range_multiplier[1] * (this.quality_base + this.quality_multiplier * 
                                (this.fifty_eternal_stone_level - this.item_level[2])))) / 10;
                        }
                    }

                    var fifty_eternal_res1 = Math.floor((Math.random() * 100) + 1);
                    var fifty_eternal_res2 = fifty_eternal_rate_values[this.fifty_eternal_actual];
                     if (fifty_eternal_res2 < 0) {
                         fifty_eternal_res2 = 0;
                     }
                    if ($(".input_setclassicenchantlevel").val().length === 0) {
                        $(".input_setclassicenchantlevel").prev().val("0");
                    }

                    $('#fifty_eternal_resultat').show();
                    $('#fifty_eternal_result1').html(fifty_eternal_res1);
                    $('#fifty_eternal_result2').html(fifty_eternal_res2);

                    if (fifty_eternal_res1 < fifty_eternal_res2) {
                        //success
                        $('#fifty_eternal_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //success (+1 applied)
                        this.fifty_eternal_actual += 1;
                    } else {
                        //fail
                        $('#fifty_eternal_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //if item is +10, +11, [...], +14 and fail, reset to +10
                        //no safespot at +10, so if for instance it fails at +12, resets to +10, AND keep downgrading (+9) if it fails twice in a row
                        if (this.fifty_eternal_actual >= 11 && this.fifty_eternal_two_fails_in_a_row_at_plus_ten == false) {
                            this.fifty_eternal_actual = 10;
                            this.fifty_eternal_two_fails_in_a_row_at_plus_ten = true;
                        } // if item is +0, keep it +0 (no negative enchantment in Aion)
                        else if (this.fifty_eternal_actual <= 0) {
                            this.fifty_eternal_actual = 0;
                        } // else fail (-1 applied)
                        else {
                            this.fifty_eternal_actual -= 1;
                        }
                    }

                    //switch back the toggle to allow the +10 reset again
                    this.fifty_eternal_two_fails_in_a_row_at_plus_ten = false;

                    if (this.fifty_eternal_actual == 15) {
                        $('#fifty_eternal_resultat').hide();
                        this.fifty_eternal_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        /*************************************************** FIFTY FIVE ETERNAL GEAR (SUPPLEMENTS NON TRAITES) /***************************************************/
        fifty_five_eternal_resetlvl: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_five_eternal_actual = 0;
            this.fifty_five_eternal_disabled = 0;
            this.fifty_five_eternal_start = 0;
            this.fifty_five_eternal_two_fails_in_a_row_at_plus_ten = false,
            $('#fifty_five_eternal_resultat').hide();
        },
        fifty_five_eternal_resetstones: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_five_eternal_stones = 0;
        },
        fifty_five_eternal_resetall: function () {
            this.range_limit = [0, 0],
            this.range_multiplier = [0, 0],
            this.quality_base = 0,
            this.quality_multiplier = 0,
            this.fifty_five_eternal_actual = 0;
            this.fifty_five_eternal_stones = 0;
            this.fifty_five_eternal_disabled = 0;
            this.fifty_five_eternal_start = 0;
            $('#fifty_five_eternal_resultat').hide();
        },
        fifty_five_eternal_toggle: function (a) {
            try {
                if (a == "fifty_five_eternal") {
                    //STATIC DATA FOR AION CLASSIC ENCHANTMENT FORMULA
                    this.quality_base = 150,
                    this.quality_multiplier = 15,
                    this.range_limit = [800, 500],
                    this.range_multiplier = [1, 0.5],
                    /*********************************************** */
                    this.fifty_five_eternal_stones++;
                    this.fifty_five_eternal_start = 1;

                    
                    var lesser_supplements_bonus = 50;
                    var normal_supplements_bonus = 100;
                    var greater_supplements_bonus = 150;
                    var supplements_bonus = 0;

                    if (this.toggleFiftyfiveEternalLesserSupplements == true) {
                        supplements_bonus = lesser_supplements_bonus;
                    } 

                    if (this.toggleFiftyfiveEternalNormalSupplements == true) {
                        supplements_bonus = normal_supplements_bonus;
                    }

                    if (this.toggleFiftyfiveEternalGreaterSupplements == true) {
                        supplements_bonus = greater_supplements_bonus;
                    }

                    if (this.toggleFiftyfiveEternalLesserSupplements == false && this.toggleFiftyfiveEternalNormalSupplements == false && this.toggleFiftyfiveEternalGreaterSupplements == false) {
                        supplements_bonus = 0;
                    }

                    var fifty_five_eternal_rate_values = [];
                    for (i=0; i<=15; i++) {
                        if (i<10) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            fifty_five_eternal_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[0], this.range_multiplier[0] * (this.quality_base + this.quality_multiplier * 
                            (this.fifty_five_eternal_stone_level - this.item_level[3])))) / 10;
                        } else if (i>=10 && i <=15) {
                            //returns the min value between range limit (some abstract value from Aion classic) and the enchantment probability depending on stone lvl, gear lvl and current enchantment level
                            fifty_five_eternal_rate_values[i] = (supplements_bonus + Math.min(this.range_limit[1], this.range_multiplier[1] * (this.quality_base + this.quality_multiplier * 
                                (this.fifty_five_eternal_stone_level - this.item_level[3])))) / 10;
                        }
                    }

                    var fifty_five_eternal_res1 = Math.floor((Math.random() * 100) + 1);
                    var fifty_five_eternal_res2 = fifty_five_eternal_rate_values[this.fifty_five_eternal_actual];
                     if (fifty_five_eternal_res2 < 0) {
                         fifty_five_eternal_res2 = 0;
                     }
                    if ($(".input_setclassicenchantlevel").val().length === 0) {
                        $(".input_setclassicenchantlevel").prev().val("0");
                    }

                    $('#fifty_five_eternal_resultat').show();
                    $('#fifty_five_eternal_result1').html(fifty_five_eternal_res1);
                    $('#fifty_five_eternal_result2').html(fifty_five_eternal_res2);

                    if (fifty_five_eternal_res1 < fifty_five_eternal_res2) {
                        //success
                        $('#fifty_five_eternal_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //success (+1 applied)
                        this.fifty_five_eternal_actual += 1;
                    } else {
                        //fail
                        $('#fifty_five_eternal_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        //if item is +10, +11, [...], +14 and fail, reset to +10
                        //no safespot at +10, so if for instance it fails at +12, resets to +10, AND keep downgrading (+9) if it fails twice in a row
                        if (this.fifty_five_eternal_actual >= 11 && this.fifty_five_eternal_two_fails_in_a_row_at_plus_ten == false) {
                            this.fifty_five_eternal_actual = 10;
                            this.fifty_five_eternal_two_fails_in_a_row_at_plus_ten = true;
                        } // if item is +0, keep it +0 (no negative enchantment in Aion)
                        else if (this.fifty_five_eternal_actual <= 0) {
                            this.fifty_five_eternal_actual = 0;
                        } // else fail (-1 applied)
                        else {
                            this.fifty_five_eternal_actual -= 1;
                        }
                    }

                    //switch back the toggle to allow the +10 reset again
                    this.fifty_five_eternal_two_fails_in_a_row_at_plus_ten = false;

                    if (this.fifty_five_eternal_actual == 15) {
                        $('#fifty_five_eternal_resultat').hide();
                        this.fifty_five_eternal_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        /*************************************************** ANCIENT GEAR /***************************************************/
        a_resetlvl: function () {
            this.a_actual = 0;
            this.a_disabled = 0;
            this.a_start = 0;
            $('#a_resultat').hide();
        },
        a_resetstones: function () {
            this.a_stones = [0, 0, 0];
        },
        a_resetall: function () {
            this.a_actual = 0;
            this.a_stones = [0, 0, 0];
            this.a_disabled = 0;
            this.a_start = 0;
            $('#a_resultat').hide();
        },
        a_toggle: function (a) {
            try {
                if (a == "a") {
                    this.a_start = 1;
                    this.a_stones[0]++;
                    var a_rate = [100, 100, 100, 88, 88, 88, 88, 68, 68, 68, 48, 48, 48, 48, 48];
                    var a_res1 = Math.floor((Math.random() * 100) + 1);
                    var a_res2 = a_rate[this.a_actual];
                    
                    $('#a_resultat').show();
                    $('#a_result1').html(a_res1);
                    $('#a_result2').html(a_res2);


                    if (a_res1 < a_res2) {
                        //success
                        if (a_res1 > 90) {
                            //crit (+2)
                            this.a_actual += 2;
                            $('#a_resultat').css({"background-color": "gold", "border-radius": "10px", "transition-duration" : "0.3s"});
                        } else {
                            //non-crit (+1)
                            $('#a_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.a_actual += 1;
                        }
                    } else {
                        //-1 or back to +10
                        $('#a_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        if (this.a_actual >= 10) {
                            this.a_actual = 10;
                        } else if (this.a_actual <= 0) {
                            this.a_actual = 0;
                        } else {
                            this.a_actual -= 1;
                        }
                    }
                    if (this.a_actual == 15) {
                        $('#a_resultat').hide();
                        this.a_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
            try {
                if (a == "l") {
                    this.a_start = 1;
                    this.a_stones[1]++;
                    var a_rate = [100, 100, 100, 100, 100, 100, 100, 88, 88, 88, 68, 68, 68, 68, 68];
                    var a_res1 = Math.floor((Math.random() * 100) + 1);
                    var a_res2 = a_rate[this.a_actual];
                    
                    $('#a_resultat').show();
                    $('#a_result1').html(a_res1);
                    $('#a_result2').html(a_res2);

                    if (a_res1 <= a_res2) {
                        //success
                        if (a_res1 > 90) {
                            //crit (+2)
                            this.a_actual += 2;
                            $('#a_resultat').css({"background-color": "gold", "border-radius": "10px", "transition-duration" : "0.3s"});
                        } else {
                            //non-crit (+1)
                            $('#a_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.a_actual += 1;
                        }
                    } else {
                        //-1 or back to +10
                        $('#a_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        if (this.a_actual >= 10) {
                            this.a_actual = 10;
                        } else if (this.actual <= 0) {
                            this.a_actual = 0;
                        } else {
                            this.a_actual -= 1;
                        }
                    }
                    if (this.a_actual == 15) {
                        $('#a_resultat').hide();
                        this.a_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
            try {
                if (a == "u") {
                    this.a_start = 1;
                    this.a_stones[2]++;
                    var a_rate = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 88, 88, 88, 88, 88];
                    var a_res1 = Math.floor((Math.random() * 100) + 1);
                    var a_res2 = a_rate[this.a_actual];

                    $('#a_resultat').show();

                    $('#a_result1').html(a_res1);
                    $('#a_result2').html(a_res2);

                    if (a_res1 < a_res2) {
                        //success
                        if (a_res1 > 90) {
                            //crit (+2)
                            this.a_actual += 2;
                            $('#a_resultat').css({"background-color": "gold", "border-radius": "10px", "transition-duration" : "0.3s"});
                        } else {
                            //non-crit (+1)
                            $('#a_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.a_actual += 1;
                        }
                    } else {
                        //fail, but no -1
                        $('#a_resultat').css({"background-color": "brown", "border-radius": "10px", "transition-duration" : "0.3s"});
                    }
                    if (this.a_actual == 15) {
                        $('#a_resultat').hide();
                        this.a_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        /*************************************************** LEGENDARY GEAR /***************************************************/
        l_resetlvl: function () {
            this.l_actual = 0;
            this.l_disabled = 0;
            this.l_start = 0;
            $('#l_resultat').hide();
        },
        l_resetstones: function () {
            this.l_stones = [0, 0, 0];
        },
        l_resetall: function () {
            this.l_actual = 0;
            this.l_stones = [0, 0, 0];
            this.l_disabled = 0;
            this.l_start = 0;
            $('#l_resultat').hide();
        },
        l_toggle: function (l) {
            try {
                if (l == "a") {
                    this.l_start = 1;
                    this.l_stones[0]++;
                    var l_rate = [58, 58, 58, 38, 38, 38, 18, 18, 18, 5, 5, 5, 5, 5, 5];
                    var l_res1 = Math.floor((Math.random() * 100) + 1);
                    var l_res2 = l_rate[this.l_actual];
                    
                    $('#l_resultat').show();
                    $('#l_result1').html(l_res1);
                    $('#l_result2').html(l_res2);


                    if (l_res1 < l_res2) {
                        //success
                        if (l_res1 > 90) {
                            //crit (+2)
                            this.l_actual += 2;
                            $('#l_resultat').css({"background-color": "gold", "border-radius": "10px", "transition-duration" : "0.3s"});
                        } else {
                            //non-crit (+1)
                            $('#l_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.l_actual += 1;
                        }
                    } else {
                        //-1 or back to +10
                        $('#l_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        if (this.l_actual >= 10) {
                            this.l_actual = 10;
                        } else if (this.l_actual <= 0) {
                            this.l_actual = 0;
                        } else {
                            this.l_actual -= 1;
                        }
                    }
                    if (this.l_actual == 15) {
                        $('#l_resultat').hide();
                        this.l_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
            try {
                if (l == "l") {
                    this.l_start = 1;
                    this.l_stones[1]++;
                    var l_rate = [100, 100, 100, 88, 88, 88, 68, 68, 68, 48, 48, 48, 48, 48, 48];
                    var l_res1 = Math.floor((Math.random() * 100) + 1);
                    var l_res2 = l_rate[this.l_actual];
                    
                    $('#l_resultat').show();
                    $('#l_result1').html(l_res1);
                    $('#l_result2').html(l_res2);

                    if (l_res1 < l_res2) {
                        //success
                        if (l_res1 > 90) {
                            //crit (+2)
                            this.l_actual += 2;
                            $('#l_resultat').css({"background-color": "gold", "border-radius": "10px", "transition-duration" : "0.3s"});
                        } else {
                            //non-crit (+1)
                            $('#l_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.l_actual += 1;
                        }
                    } else {
                        //-1 or back to +10
                        $('#l_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        if (this.l_actual >= 10) {
                            this.l_actual = 10;
                        } else if (this.l_actual <= 0) {
                            this.l_actual = 0;
                        } else {
                            this.l_actual -= 1;
                        }
                    }
                    if (this.l_actual == 15) {
                        $('#l_resultat').hide();
                        this.l_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
            try {
                if (l == "u") {
                    this.l_start = 1;
                    this.l_stones[2]++;
                    var l_rate = [100, 100, 100, 98, 98, 98, 78, 78, 78, 58, 58, 58, 58, 58, 58];
                    var l_res1 = Math.floor((Math.random() * 100) + 1);
                    var l_res2 = l_rate[this.l_actual];
                    
                    $('#l_resultat').show();
                    $('#l_result1').html(l_res1);
                    $('#l_result2').html(l_res2);

                    if (l_res1 < l_res2) {
                        //success
                        if (l_res1 > 90) {
                            //crit (+2)
                            this.l_actual += 2;
                            $('#l_resultat').css({"background-color": "gold", "border-radius": "10px", "transition-duration" : "0.3s"});
                        } else {
                            //non-crit (+1)
                            $('#l_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.l_actual += 1;
                        }
                    } else {
                        //fail, but no -1
                        $('#l_resultat').css({"background-color": "brown", "border-radius": "10px", "transition-duration" : "0.3s"});
                    }
                    if (this.l_actual == 15) {
                        $('#l_resultat').hide();
                        this.l_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        /*************************************************** ULTIMATE GEAR /***************************************************/
        u_resetlvl: function () {
            this.u_actual = 0;
            this.u_disabled = 0;
            this.u_start = 0;
            $('#u_resultat').hide();
        },
        u_resetstones: function () {
            this.u_stones = [0, 0, 0];
        },
        u_resetall: function () {
            this.u_actual = 0;
            this.u_stones = [0, 0, 0];
            this.u_disabled = 0;
            this.u_start = 0;
            $('#u_resultat').hide();
        },
        u_toggle: function (u) {
            try {
                if (u == "a") {
                    this.u_start = 1;
                    this.u_stones[0]++;
                    var u_rate = [52, 52, 52, 32, 32, 32, 12, 12, 12, 5, 5, 5, 5, 5, 5];
                    var u_res1 = Math.floor((Math.random() * 100) + 1);
                    var u_res2 = u_rate[this.u_actual];

                    $('#u_resultat').show();
                    $('#u_result1').html(u_res1);
                    $('#u_result2').html(u_res2);

                    if (u_res1 < u_res2) {
                        //success
                        if (u_res1 > 90) {
                            //crit (+2)
                            this.u_actual += 2;
                            $('#u_resultat').css({"background-color": "gold", "border-radius": "10px", "transition-duration" : "0.3s"});
                        } else {
                            //non-crit (+1)
                            $('#u_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.u_actual += 1;
                        }
                    } else {
                        //-1 or back to +10
                        $('#u_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        if (this.u_actual >= 10) {
                            this.u_actual = 10;
                        } else if (this.u_actual <= 0) {
                            this.u_actual = 0;
                        } else {
                            this.u_actual -= 1;
                        }
                    }
                    if (this.u_actual == 15) {
                        $('#u_resultat').hide();
                        this.u_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
            try {
                if (u == "l") {
                    this.u_start = 1;
                    this.u_stones[1]++;
                    var u_rate = [100, 100, 100, 82, 82, 82, 62, 62, 62, 42, 42, 42, 42, 42, 42];

                    var u_res1 = Math.floor((Math.random() * 100) + 1);
                    var u_res2 = u_rate[this.u_actual];

                    $('#u_resultat').show();
                    $('#u_result1').html(u_res1);
                    $('#u_result2').html(u_res2);

                    if (u_res1 < u_res2) {
                        //success
                        if (u_res1 > 90) {
                            //crit (+2)
                            this.u_actual += 2;
                            $('#u_resultat').css({"background-color": "gold", "border-radius": "10px", "transition-duration" : "0.3s"});
                        } else {
                            //non-crit (+1)
                            $('#u_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.u_actual += 1;
                        }
                    } else {
                        //-1 or back to +10
                        $('#u_resultat').css({"background-color": "tomato", "border-radius": "10px", "transition-duration" : "0.3s"});
                        if (this.u_actual >= 10) {
                            this.u_actual = 10;
                        } else if (this.u_actual <= 0) {
                            this.u_actual = 0;
                        } else {
                            this.u_actual -= 1;
                        }
                    }
                    if (this.u_actual == 15) {
                        $('#u_resultat').hide();
                        this.u_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
            try {
                if (u == "u") {
                    this.u_start = 1;
                    this.u_stones[2]++;
                    var u_rate = [100, 100, 100, 92, 92, 92, 72, 72, 72, 52, 52, 52, 52, 52, 52];
        
                    var u_res1 = Math.floor((Math.random() * 100) + 1);
                    var u_res2 = u_rate[this.u_actual];
        
                    $('#u_resultat').show();
                    $('#u_result1').html(u_res1);
                    $('#u_result2').html(u_res2);
        
                    if (u_res1 < u_res2) {
                        //success
                        if (u_res1 > 90) {
                            //crit (+2)
                            this.u_actual += 2;
                            $('#u_resultat').css({"background-color": "gold", "border-radius": "10px", "transition-duration" : "0.3s"});
                        } else {
                            //non-crit (+1)
                            $('#u_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.u_actual += 1;
                        }
                    } else {
                        //fail, but no -1
                        $('#u_resultat').css({"background-color": "brown", "border-radius": "10px", "transition-duration" : "0.3s"});
                    }
                    if (this.u_actual == 15) {
                        $('#u_resultat').hide();
                        this.u_disabled = 1;
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        },
        /*************************************************** STIGMA ENCHANT ***************************************************/
        s_resetlvl: function () {
            this.s_actual = 0;
            this.s_disabled = 0;
            this.s_start = 0;
            this.s_actual = 0;
            $('#s_resultat').hide();
        },
        s_resetstones: function () {
            this.s_stones = 0;
        },
        s_resetall: function () {
            this.s_actual = 0;
            this.s_stones = 0;
            this.s_disabled = 0;
            this.s_start = 0;
            $('#s_resultat').hide();
            this.s_actual = 0;
        },

        s_toggle: function (s) {
            try {
                this.s_start = 1;
                this.s_stones++;
                var s_rate20percent = [100, 95, 90, 80, 70, 60, 50, 40, 30, 20, 20, 20, 20, 20, 20];
                // not used 
                // var s_rate30percent = [100, 95, 90, 80, 70, 60, 50, 40, 30, 30, 30, 30, 30, 30, 30];
                var s_rate35percent = [100, 95, 90, 80, 70, 60, 50, 40, 35, 35, 35, 35, 35, 35, 35];
                var s_rate_critplus2 = [13, 13, 13, 8, 8, 5, 5, 5, 3, 1, 1, 1, 1, 1, 1];
                var s_rate_critplus3 = [5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var s_rate_samelevel = [5, 5, 5, 10, 10, 16, 20, 20, 20, 20, 20, 20, 20, 20, 20];
                var s_rolluser = Math.floor((Math.random() * 100) + 1);
                var s_rolliffail = Math.floor((Math.random() * 100) + 1);
                var s_res;
                var s_info_content;

                //the a variable bellow prevents a -2 when being at +9 (dropping at +7 instead of +8)
                var aa;
                
                //the b variable bellow prevents from setting stigma enchantment at +14 after +1 or +2 or +3 (it goes at "the problematic IF" -ctrl F it to check the concerned IF-)
                var bb;

                if ($(".input_setenchantlevel").val().length === 0) {
                    $(".input_setenchantlevel").prev().val("0");
                }

                //switch between 20% and 35% success rate
                if (this.togglesuccessrate == false) {
                    s_res = s_rate20percent[this.s_actual];
                } else {
                    s_res = s_rate35percent[this.s_actual];
                }

                $('#s_resultat').show();
                $('#s_result1').html(s_rolluser);
                $('#s_result2').html(s_res);

                /*test
                $('#s_test').html(this.s_actual);
                $('#s_test2').html(this.plus9safespot);
                $('#s_test3').html(s_rolliffail);
                $('#s_test4').html(s_rate_samelevel[this.s_actual]);
                */

                if (s_rolluser < s_res) {
                    //success
                    if (s_rolluser < s_rate_critplus3[this.s_actual]) {
                        //crit (+3)
                        this.s_actual += 3;
                        $('#s_resultat').css({"background-color": "orange", "border-radius": "10px", "transition-duration" : "0.3s"});
                        s_info_content="Crit +3 ! Very lucky ! ";
                    } else if (s_rolluser < s_rate_critplus2[this.s_actual]) {
                        //crit (+2)
                        this.s_actual += 2;
                        $('#s_resultat').css({"background-color": "gold", "border-radius": "10px", "transition-duration" : "0.3s"});
                        s_info_content="Crit +2 ! Nice ! ";
                    } else {
                        //non-crit (+1)
                        $('#s_resultat').css({"background-color": "limegreen", "border-radius": "10px", "transition-duration" : "0.3s"});
                        this.s_actual += 1;
                        s_info_content="+1 ! ";
                        console.log("lol");
                    } 
                } else {
                    if (this.s_actual >= 9 && this.s_actual < 12) {
                        // if we are between +9 and +11
                        if (this.plus9safespot == true) {
                            //if +9 safespot toggle is ON (no matter if +12 safespot is either ON or OFF)
                            if (s_rolliffail <= s_rate_samelevel[this.s_actual]) {
                                //>>fail but no -1
                                $('#s_resultat').css({"background-color": "brown", "border-radius": "10px", "transition-duration" : "0.3s"});
                                console.log(" <= 9 et +0 only");
                                s_info_content="Same level. ";
                                console.log("lol1");
                            } else if (this.s_actual != 9) {
                                //if we are not at 9, fail -1
                                escape = 1;
                                this.s_actual -= 1;
                                $('#s_resultat').css({"background-color": "red", "border-radius": "10px", "transition-duration" : "0.3s"});
                                s_info_content="-1 :( ";
                                console.log("lol2");
                            } else {
                                //>>if we are at 9, resets to 9
                                this.s_actual = 9;
                                $('#s_resultat').css({"background-color": "red", "border-radius": "10px", "transition-duration" : "0.3s"});
                                console.log(" <= 9 et +0 ou -1");
                                s_info_content="Back to +9. ";
                                console.log("lol3");
                            }
                        } else {
                            //>>fail and -1
                            $('#s_resultat').css({"background-color": "red", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.s_actual -= 1;
                            s_info_content="-1 :( ";
                            console.log("a -1");
                            //the a variable says "don't go throught any other 'if','else' -> do break"
                            aa = 1;
                            console.log("lol4");
                        } 
                    }
                    if (this.s_actual >= 12) {
                        // if we are above +12
                        if (this.plus12safespot == true) {
                            //if +12 safespot toggle is ON
                            if (s_rolliffail <= s_rate_samelevel[this.s_actual]) {
                                //>>fail but no -1
                                $('#s_resultat').css({"background-color": "brown", "border-radius": "10px", "transition-duration" : "0.3s"});
                                console.log(" <= 12 et +0 only");
                                s_info_content="Same level. ";
                                console.log("lol5");
                            } else if (this.s_actual != 12) {
                                //if we are not at 12, fail -1
                                this.s_actual -= 1;
                                s_info_content="-1 :( ";
                                $('#s_resultat').css({"background-color": "red", "border-radius": "10px", "transition-duration" : "0.3s"});
                                console.log("lol6");
                            } else {
                                //>>resets to 12 if +12 is achieved
                                this.s_actual = 12;
                                $('#s_resultat').css({"background-color": "red", "border-radius": "10px", "transition-duration" : "0.3s"});
                                console.log(" <= 12 et +0 ou -1");
                                s_info_content="Back to +12. ";
                                console.log("lol7");
                            }
                        } else if (this.plus9safespot == true) { 
                            //if +9 safespot toggle is OFF AND +12 safespot toggle is ON
                            if (s_rolliffail <= s_rate_samelevel[this.s_actual]) {
                                //>>fail but no -1
                                $('#s_resultat').css({"background-color": "brown", "border-radius": "10px", "transition-duration" : "0.3s"});
                                console.log(" <= 9 et +0 only");
                                s_info_content="Same level. ";
                                console.log("lol8");
                            } else if (this.s_actual != 9) {
                                //if we are not at 9, fail -1
                                this.s_actual -= 1;
                                $('#s_resultat').css({"background-color": "red", "border-radius": "10px", "transition-duration" : "0.3s"});
                                s_info_content="-1 :( ";
                                console.log("lol9");
                            } else {
                                //>>if we are at 9, resets to 9
                                this.s_actual = 9;
                                $('#s_resultat').css({"background-color": "red", "border-radius": "10px", "transition-duration" : "0.3s"});
                                console.log(" <= 9 et +0 ou -1");
                                s_info_content="Back to +9. ";
                                console.log("lol10");
                            }
                        } else {
                            //>>fail and -1
                            $('#s_resultat').css({"background-color": "red", "border-radius": "10px", "transition-duration" : "0.3s"});
                            this.s_actual -= 1;
                            console.log("b -1");
                            s_info_content="-1 :( ";
                            console.log("lol11");
                        }   
                    }
                    else if (this.s_actual < 9 && aa != 1) {
                        //case if stigma is before safespot things
                        //>>fail and -1
                        $('#s_resultat').css({"background-color": "red", "border-radius": "10px", "transition-duration" : "0.3s"});
                        this.s_actual -= 1;
                        console.log("-1");
                        s_info_content="-1 :( ";
                        console.log("lol12");
                    }
                 }

                if (this.s_actual == 15) {
                    $('#s_resultat').css({"background-color": "rgb(124, 240, 130)", "border-radius": "10px", "transition-duration" : "0.3s"});
                    this.s_disabled = 1;
                    console.log("lol13");
                }
                
                /* the problematic IF */

                if (this.s_actual > 15) {
                    this.s_actual = 14 ;
                    console.log("lol14");
                }
                /***************************** DU PEAUFINEMENT MAIS CA SERT A RIEN AU FINAL********************************/
                /*
                if (this.stigmaedit == true) {
                    $('#s_resultat').show();
                    this.s_disabled = 0;
                }
                if (this.s_actual == 15 && this.stigmaedit == false) {
                    $('#s_resultat').hide();
                    console.log("Oui");
                    this.s_disabled = 1;
                }

                if (this.s_actual == 15 && this.stigmaedit == true) {
                    $('#s_resultat').hide();
                    console.log("Non");
                    this.s_disabled = 0;
                }*/

                console.log("Disabled : " + this.s_disabled);

                /**********************************************************************************************************/

                //Update l'info dans la div colorée [s_info_content] You rolled ......
                $('#s_info').html(s_info_content);
            }
            catch (err) {
                console.error(err);
            }
        }
    }
});


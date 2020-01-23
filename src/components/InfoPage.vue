<template>
    <div id="infoPage" style="position:absolute;left:50%;margin-left:-306px;top:0px;width:612px;height:792px;border-style:outset;overflow:hidden">
        <div style="position:absolute;left:0px;top:0px">
            <img src="@/assets/images/background1.jpg" width="612" height="792">
        </div>
        <div style="position:absolute;left:550px;top:15px" class="cls_002">
            <input type="button" value="Save" class="saveButton" v-on:click="save">
        </div>

        <div style="position:absolute;left:270.72px;top:63.25px" class="cls_002"><span class="cls_002">CLASS & LEVEL</span></div>
        <div style="position:absolute;left:270.72px;top:48.25px;" class="cls_002"><input type="text" v-model="character.class" name="class"></div>

        <div style="position:absolute;left:383.47px;top:63.25px" class="cls_002"><span class="cls_002">BACKGROUND</span></div>
        <div style="position:absolute;left:383.47px;top:48.25px" class="cls_002"><input type="text" name="background" v-model="character.background"></div>

        <div style="position:absolute;left:480.24px;top:63.25px" class="cls_002"><span class="cls_002">PLAYER NAME</span></div>
        <div style="position:absolute;left:480.24px;top:48.25px" class="cls_002"><input type="text" name="playerName" v-model="character.playerName"></div>

        <div style="position:absolute;left:69.06px;top:89.52px" class="cls_002"><span class="cls_002">CHARACTER NAME</span></div>
        <div style="position:absolute;left:69.06px;top:60.52px" class="cls_002">
            <input name="characterName" class="characterName" v-model="character.name">
        </div>

        <div style="position:absolute;left:270.72px;top:89.33px" class="cls_002"><span class="cls_002">RACE</span></div>
        <div style="position:absolute;left:270.72px;top:74.33px" class="cls_002"><input type="text" name="race" v-model="character.race"></div>

        <div style="position:absolute;left:383.47px;top:89.32px" class="cls_002"><span class="cls_002">ALIGNMENT</span></div>
        <div style="position:absolute;left:383.47px;top:74.32px" class="cls_002"><input type="text" name="alignment" v-model="character.alignment"></div>

        <div style="position:absolute;left:480.23px;top:89.52px" class="cls_002"><span class="cls_002">EXPERIENCE POINTS</span></div>
        <div style="position:absolute;left:480.23px;top:74.52px" class="cls_002"><input type="text" name="xp" v-model="character.xp"></div>

        <div style="position:absolute;left:146.36px;top:136.00px" class="cls_003"><span class="cls_003">INSPIRATION</span></div>
        <div style="position:absolute;left:41.14px;top:144.91px" class="cls_004"><span class="cls_004">STRENGTH</span></div>
        <div style="position:absolute;left:236.71px;top:165.38px" class="cls_004"><span class="cls_004">ARMOR<br>CLASS</span></div>
        <div style="position:absolute;left:135.60px;top:173.70px" class="cls_003"><span class="cls_003">PROFICIENCY BONUS</span></div>
        <div style="position:absolute;left:288.44px;top:174.07px" class="cls_004"><span class="cls_004">INITIATIVE</span></div>
        <div style="position:absolute;left:352.99px;top:174.07px" class="cls_004"><span class="cls_004">SPEED</span></div>
        <div style="position:absolute;left:467.73px;top:188.89px" class="cls_005"><span class="cls_005">PERSONALITY TRAITS</span></div>
        <div style="position:absolute;left:229.76px;top:200.12px" class="cls_006"><span class="cls_006">Hit Point Maximum</span></div>
        <div style="position:absolute;left:131.00px;top:206.64px" class="cls_002"><span class="cls_002">Strength</span></div>
        <div style="position:absolute;left:41.48px;top:216.76px" class="cls_004"><span class="cls_004">DEXTERITY</span></div>
        <div style="position:absolute;left:131.00px;top:220.14px" class="cls_002"><span class="cls_002">Dexterity</span></div>
        <div style="position:absolute;left:131.00px;top:233.64px" class="cls_002"><span class="cls_002">Constitution</span></div>
        <div style="position:absolute;left:273.92px;top:243.88px" class="cls_004"><span class="cls_004">CURRENT HIT POINTS</span></div>
        <div style="position:absolute;left:486.01px;top:243.92px" class="cls_005"><span class="cls_005">IDEALS</span></div>
        <div style="position:absolute;left:131.00px;top:247.14px" class="cls_002"><span class="cls_002">Intelligence</span></div>
        <div style="position:absolute;left:131.00px;top:260.64px" class="cls_002"><span class="cls_002">Wisdom</span></div>
        <div style="position:absolute;left:131.00px;top:274.14px" class="cls_002"><span class="cls_002">Charisma</span></div>
        <div style="position:absolute;left:34.30px;top:288.01px" class="cls_004"><span class="cls_004">CONSTITUTION</span></div>
        <div style="position:absolute;left:124.63px;top:290.21px" class="cls_004"><span class="cls_004">SAVING THROWS</span></div>
        <div style="position:absolute;left:269.86px;top:296.82px" class="cls_004"><span class="cls_004">TEMPORARY HIT POINTS</span></div>
        <div style="position:absolute;left:485.48px;top:299.76px" class="cls_005"><span class="cls_005">BONDS</span></div>
        <div style="position:absolute;left:131.00px;top:321.90px" class="cls_002"><span class="cls_002">Acrobatics </span><span class="cls_007">(Dex)</span></div>
        <div style="position:absolute;left:229.76px;top:320.70px" class="cls_006"><span class="cls_006">Total</span></div>
        <div style="position:absolute;left:314.77px;top:323.18px" class="cls_005"><span class="cls_005">SUCCESSES</span></div>
        <div style="position:absolute;left:131.00px;top:335.40px" class="cls_002"><span class="cls_002">Animal Handling </span><span class="cls_007">(Wis)</span></div>
        <div style="position:absolute;left:319.80px;top:338.18px" class="cls_005"><span class="cls_005">FAILURES</span></div>
        <div style="position:absolute;left:131.00px;top:348.90px" class="cls_002"><span class="cls_002">Arcana </span><span class="cls_007">(Int)</span></div>
        <div style="position:absolute;left:251.51px;top:353.51px" class="cls_005"><span class="cls_005">HIT DICE</span></div>
        <div style="position:absolute;left:330.55px;top:353.51px" class="cls_005"><span class="cls_005">DEATH SAVES</span></div>
        <div style="position:absolute;left:486.57px;top:354.49px" class="cls_005"><span class="cls_005">FLAWS</span></div>
        <div style="position:absolute;left:35.99px;top:359.92px" class="cls_004"><span class="cls_004">INTELLIGENCE</span></div>
        <div style="position:absolute;left:131.00px;top:362.40px" class="cls_002"><span class="cls_002">Athletics </span><span class="cls_007">(Str)</span></div>
        <div style="position:absolute;left:131.00px;top:375.90px" class="cls_002"><span class="cls_002">Deception </span><span class="cls_007">(Cha)</span></div>
        <div style="position:absolute;left:223.53px;top:383.56px" class="cls_008"><span class="cls_008">NAME</span></div>
        <div style="position:absolute;left:291.21px;top:383.56px" class="cls_008"><span class="cls_008">ATK BONUS  DAMAGE/TYPE</span></div>
        <div style="position:absolute;left:131.00px;top:389.40px" class="cls_002"><span class="cls_002">History </span><span class="cls_007">(Int)</span></div>
        <div style="position:absolute;left:131.00px;top:402.90px" class="cls_002"><span class="cls_002">Insight </span><span class="cls_007">(Wis)</span></div>
        <div style="position:absolute;left:131.00px;top:416.40px" class="cls_002"><span class="cls_002">Intimidation </span><span class="cls_007">(Cha)</span></div>
        <div style="position:absolute;left:44.10px;top:431.47px" class="cls_004"><span class="cls_004">WISDOM</span></div>
        <div style="position:absolute;left:131.00px;top:429.90px" class="cls_002"><span class="cls_002">Investigation </span><span class="cls_007">(Int)</span></div>
        <div style="position:absolute;left:131.00px;top:443.40px" class="cls_002"><span class="cls_002">Medicine </span><span class="cls_007">(Wis)</span></div>
        <div style="position:absolute;left:131.00px;top:456.90px" class="cls_002"><span class="cls_002">Nature </span><span class="cls_007">(Int)</span></div>
        <div style="position:absolute;left:131.00px;top:470.40px" class="cls_002"><span class="cls_002">Perception </span><span class="cls_007">(Wis)</span></div>
        <div style="position:absolute;left:131.00px;top:483.90px" class="cls_002"><span class="cls_002">Performance </span><span class="cls_007">(Cha)</span></div>
        <div style="position:absolute;left:131.00px;top:497.40px" class="cls_002"><span class="cls_002">Persuasion </span><span class="cls_007">(Cha)</span></div>
        <div style="position:absolute;left:41.50px;top:502.88px" class="cls_004"><span class="cls_004">CHARISMA</span></div>
        <div style="position:absolute;left:131.00px;top:510.90px" class="cls_002"><span class="cls_002">Religion </span><span class="cls_007">(Int)</span></div>
        <div style="position:absolute;left:131.00px;top:524.40px" class="cls_002"><span class="cls_002">Sleight of Hand </span><span class="cls_007">(Dex)</span></div>
        <div style="position:absolute;left:131.00px;top:537.90px" class="cls_002"><span class="cls_002">Stealth </span><span class="cls_007">(Dex)</span></div>
        <div style="position:absolute;left:131.00px;top:551.40px" class="cls_002"><span class="cls_002">Survival </span><span class="cls_007">(Wis)</span></div>
        <div style="position:absolute;left:140.03px;top:569.59px" class="cls_004"><span class="cls_004">SKILLS</span></div>
        <div style="position:absolute;left:269.21px;top:569.59px" class="cls_004"><span class="cls_004">ATTACKS & SPELLCASTING</span></div>
        <div style="position:absolute;left:88.47px;top:595.77px" class="cls_005"><span class="cls_005">PASSIVE WISDOM (PERCEPTION)</span></div>
        <div style="position:absolute;left:214.00px;top:604.01px" class="cls_008"><span class="cls_008">CP</span></div>
        <div style="position:absolute;left:214.20px;top:629.72px" class="cls_008"><span class="cls_008">SP</span></div>
        <div style="position:absolute;left:214.19px;top:655.80px" class="cls_008"><span class="cls_008">EP</span></div>
        <div style="position:absolute;left:213.70px;top:681.87px" class="cls_008"><span class="cls_008">GP</span></div>
        <div style="position:absolute;left:214.14px;top:707.58px" class="cls_008"><span class="cls_008">PP</span></div>
        <div style="position:absolute;left:61.69px;top:756.86px" class="cls_004"><span class="cls_004">OTHER PROFICIENCIES & LANGUAGES</span></div>
        <div style="position:absolute;left:223.97px;top:756.86px" class="cls_004"><span class="cls_004">ATT81EME1T</span></div>
        <div style="position:absolute;left:312.37px;top:756.86px" class="cls_004"><span class="cls_004">EQUIPMENT</span></div>
        <div style="position:absolute;left:466.49px;top:757.04px" class="cls_004"><span class="cls_004">FEATURES & TRAITS</span></div>
        <div style="position:absolute;left:174.52px;top:774.18px" class="cls_009"><span class="cls_009">TM & © 2014 Wizards of the Coast LLC. Permission is granted to photocopy this document for personal use.</span></div>
        </div>
</template>

<script>
module.exports = {
    props: ['characterName'],
    data: function () {
        return {
            character: {
                name: "",
                class: "",
                playerName: "",
                race: "",
                alignment: "",
                xp: ""
            }
        }
    },
    created: function() {
        let characterObj = JSON.parse(this.$cookie.get('character'));
        if(characterObj !== null)
            this.character = characterObj;
    },
    methods: {
        save: function(event) {
            this.$cookie.set('character', JSON.stringify(this.character))
            alert("Saved!");
        }
    }
}
</script>

<style scoped>
    #infoPage {
        zoom: 200%;
    }

    .cls_002 input {
        border: 0px;
        background-color: transparent;
        font-family: Arial,serif;
        font-size: 7.0px;
        height: 10px
    }

    .characterName {
        height: 20px !important;
        font-size: 14px !important;
    }

    .saveButton {
        width: 50px;
        box-shadow:inset 0px 1px 0px 0px #54a3f7;
        background:linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
        background-color:#007dc1;
        border-radius:3px;
        border:1px solid #124d77;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size: 7px;
        text-decoration:none;
        text-shadow:0px 1px 0px #154682;
    }
    .saveButton:hover {
        background:linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
        background-color:#0061a7;
    }
    .saveButton:active {
        position:relative;
        top:1px;
    }


    span.cls_002{font-family:Arial,serif;font-size:7.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
    div.cls_002{font-family:Arial,serif;font-size:7.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
    span.cls_003{font-family:Arial,serif;font-size:5.8px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
    div.cls_003{font-family:Arial,serif;font-size:5.8px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
    span.cls_004{font-family:Arial,serif;font-size:6.5px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
    div.cls_004{font-family:Arial,serif;font-size:6.5px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
    span.cls_005{font-family:Arial,serif;font-size:5.8px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
    div.cls_005{font-family:Arial,serif;font-size:5.8px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
    span.cls_006{font-family:Arial,serif;font-size:7.0px;color:rgb(149,151,151);font-weight:normal;font-style:normal;text-decoration: none}
    div.cls_006{font-family:Arial,serif;font-size:7.0px;color:rgb(149,151,151);font-weight:normal;font-style:normal;text-decoration: none}
    span.cls_007{font-family:Arial,serif;font-size:7.0px;color:rgb(160,161,161);font-weight:normal;font-style:normal;text-decoration: none}
    div.cls_007{font-family:Arial,serif;font-size:7.0px;color:rgb(160,161,161);font-weight:normal;font-style:normal;text-decoration: none}
    span.cls_008{font-family:Arial,serif;font-size:5.8px;color:rgb(149,151,151);font-weight:normal;font-style:normal;text-decoration: none}
    div.cls_008{font-family:Arial,serif;font-size:5.8px;color:rgb(149,151,151);font-weight:normal;font-style:normal;text-decoration: none}
    span.cls_009{font-family:Arial,serif;font-size:5.5px;color:rgb(201,202,202);font-weight:normal;font-style:normal;text-decoration: none}
    div.cls_009{font-family:Arial,serif;font-size:5.5px;color:rgb(201,202,202);font-weight:normal;font-style:normal;text-decoration: none}
    span.cls_010{font-family:Arial,serif;font-size:6.5px;color:rgb(255,254,255);font-weight:bold;font-style:normal;text-decoration: none}
    div.cls_010{font-family:Arial,serif;font-size:6.5px;color:rgb(255,254,255);font-weight:bold;font-style:normal;text-decoration: none}
    span.cls_011{font-family:Arial,serif;font-size:5.5px;color:rgb(202,202,202);font-weight:normal;font-style:normal;text-decoration: none}
    div.cls_011{font-family:Arial,serif;font-size:5.5px;color:rgb(202,202,202);font-weight:normal;font-style:normal;text-decoration: none}
    span.cls_012{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
    div.cls_012{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
    span.cls_014{font-family:Arial,serif;font-size:7.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
    div.cls_014{font-family:Arial,serif;font-size:7.0px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
    span.cls_013{font-family:Arial,serif;font-size:6.5px;color:rgb(197,198,198);font-weight:bold;font-style:normal;text-decoration: none}
    div.cls_013{font-family:Arial,serif;font-size:6.5px;color:rgb(197,198,198);font-weight:bold;font-style:normal;text-decoration: none}
</style>
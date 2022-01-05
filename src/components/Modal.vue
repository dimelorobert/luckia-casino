<template>
<div class="modal-backdrop-limits">
  <div class="modal-overlay" @click="close" ></div>
  <div class="modal-limits">
    <header class="modal-header-limits">
      <div class="c-modal-line"></div>
      <p>Limites de deposito</p>
    </header>

    <section class="modal-body-limits">
      <div class="single-limit-wrapper" v-for='value, index in innerValues' :key="index.id">
        <Textbox inputType="number"  :isLimit=1  :text="value.Code" :name="value.Code" @validate="catchLimit" :cid=increment+parseInt(value.Id) :defaultValue='value.Value' @havingError="buttonToggle"></Textbox/>
      </div>
    </section>

    <footer class="modal-footer-limits">
      <Button class="c-button-back" text="Volver" type="ghost" color="primary" size="medium" event="close"
        @close="close"></Button>
      <Button class="c-button-save" text="Guardar" type="filled" color="primary" size="medium" event="save" :state="buttonState"
        @save="saveLimits"></Button>
    </footer>
  </div>
</div>

</template>
   
</template></template>



<script>
import Textbox from "../Textbox/Textbox.vue";
import Button from "../Button/Button.vue";

/**
 * Componente limits modal
 */
export default {
  name: "LimitsModal",
  props: {
    cid: {
      type: Number,
      required: false,
    },
    values: {
      type: Array,
      required: false,
    },
  },
  data: function () {
    return {
      valor: "",
      depositLimits: [
        { Id: 1, PlayerLimitMaps: [{ Amount: 0}] },
        { Id: 2, PlayerLimitMaps: [{ Amount: 0 }] },
        { Id: 3, PlayerLimitMaps: [{ Amount: 0 }] },
      ],
      innerValues: this.values,
      increment: 5000,
      buttonState: "",
    };
  },
  components: {
    Textbox,
    Button,
  },
  created(){
    for(var i=0;i<this.values.length;i++){
      this.depositLimits[i].PlayerLimitMaps[0].Amount=parseInt(this.values[i].Value);
    }
  },
  methods: {
    catchLimit(val, cid, flag, callback) {
      this.depositLimits[cid - (this.increment + 1)].PlayerLimitMaps[0].Amount =
        parseFloat(val);
      callback("", "3");
      this.emitLimit(false);
    },
    emitLimit(save) {
      if(save)
      for(var i = 0;i<this.depositLimits.length;i++){
        this.innerValues[i].Value = this.depositLimits[i].PlayerLimitMaps[0].Amount;
      }
      this.$emit("depositLimits", this.depositLimits, save);
    },
    saveLimits() {
      this.$emit("close");
      this.emitLimit(true);
    },
    buttonToggle(isError) {
      this.buttonState = isError ? "disabled" : "";
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style  lang="sass" scoped>
//********************//REGISTER SHARED STYLES//********************//


//************//NEUTRAL-COLORS//************//

$color-neutral-7:#d6d6d6;
$color-neutral-8: #f2eeeb;

//************//ACTION-PRIMARY//************//

$color-primary-default: #EA5B0C;
$color-primary-hover: #FF8800;
$color-primary-active: #444444;
$color-primary-disabled: rgba(234, 91, 12, 0.50);
$color-primary-hover10: rgba(255, 136, 0, 0.1);
$color-primary-active20: rgba(220, 68, 5, 0.2);;


//************//ACTION-SECONDARY//************//

$color-secondary-default:#1269B8;
$color-secondary-hover:#41B4E4;
$color-secondary-active:#1880AB;
$color-secondary-disabled:rgba(18, 105, 184, 0.5);
$color-secondary-hover10:rgba(65, 180, 228, 0.1);
$color-secondary-active20: rgba(24, 128, 171, 0.2);

//************//ACTION-TERTIARY//************//

$color-tertiary-default:#D9F940;
$color-tertiary-hover:#849D0C;
$color-tertiary-active:#7B9400;
$color-tertiary-disabled:rgba(217, 249, 64, 0.5);;
$color-tertiary-hover10:rgba(132, 157, 12, 0.1);
$color-tertiary-active20:  rgba(123, 148, 0, 0.2);


//************//ACTION-NEUTRAL//************//

$color-neutral-default:#A19690;
$color-neutral-hover:#948A85;
$color-neutral-active:#877E79;
$color-neutral-disabled:rgba(161, 150, 144, 0.7);
$color-neutral-hover10:rgba(128, 116, 109, 0.1);
$color-neutral-active20:rgba(128, 116, 109, 0.2);


//************//COLOR-STATES//************//
$color-state-default:#394452;
$color-state-success:#5FAF2D;
$color-state-warning:#8D3707;
$color-state-error:#E02020;
$color-state-info:#2E5AAC;
$color-state-default-bg:#EBEEF2;
$color-state-success-bg:#EDF9F0;
$color-state-warning-bg:#FFF4EC;
$color-state-error-bg:#FEEFEF;
$color-state-info-bg:#EEF2FA;


//************//OTHER-COLORS//************//

$color-placeholder:#09101d;
$color-border-filled:#858C94;
$color-bg-default:#efefef;
$color-placeholder80:rgba($color-placeholder,0.75);
$color-bg-transparent: #FFFFFF00;



//********************//FONTS AND MARGINS//********************//
* {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
}


$font-size-small:13px;
$font-size-default:14px;
$font-size-large-desktop: 40px;
$font-size-large-mobile:32px;

$margin-size-small:10px;
$margin-size-default:16px;
$margin-size-big:40px;

$grid-height-default:70px;

$object-size-small:8px;
$object-size-default:16px;

$object-width-default:320px;
$object-min-width-default:245px;

$object-height-small:32px;
$object-height-default:48px;

$border-radius-default:8px;
$border-radius-large:16px;

$line-height-default:20px;
$line-height-large:24px;

$stepper-height-small:4px;

.modal-backdrop-limits {
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-overlay{
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .modal-limits {
    width: 650px;
    height: 480px;
    background: white;
    box-shadow: 0px -16px 32px 8px rgba(68, 68, 68, 0.12);
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: clip;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: $margin-size-default, $margin-size-default ;
    position: relative !important;

  }

  .c-modal-line{
    margin-bottom: 8px;
    height: 2.5px;
    background: $color-neutral-7;
    width: 57px;
    position: relative;
    display: none;
  }

  .modal-header-limits,
  .modal-footer-limits {
    display: flex;
    background: none;
  }

  .modal-header-limits {
    position: relative;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #444444;
    justify-content: center;
    align-items: center;
    height: 36px;
    margin-bottom:30px;
    flex-direction: column;
  }

  .modal-header-limits p {
    font-weight: 400;
    font-size:24px;
  }

  .modal-footer-limits {
    flex-direction: row;
    justify-content: center;
  }

  .modal-body-limits {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: $margin-size-big;
    margin-left:$margin-size-big;
    width:320px;
  }

  .c-button-back{
      margin-right: 16px;
  }

  .single-limit-wrapper{
    width: 100%;
  }

  button{
      width: 152px;
  }

  @media (max-width:600px) {
    .modal-backdrop-limits{
      animation: 0.3s fadeIn;
      align-items: flex-end;
    }
    .modal-limits{
      width:100%;
      height: 420px;
      border-radius: 16px 16px 0px 0px;
    }
    .modal-body-limits{
      width: 300px;
    }
    .c-modal-line{
      display: block;
    }
  }

  @keyframes fadeIn{
    from{
      background:none;
    }
    to{
      background: rgba(0,0,0,0.2);
    }
</style>